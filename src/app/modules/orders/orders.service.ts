import { CarModal } from "../cars.model";
import { Order } from "../orders.model";
import { IOrder } from "./orders.interface";

export const createOrder = async (orderData: IOrder) => {
  const car = await CarModal.findById(orderData.car);

  if (!car) {
    throw new Error("Car not found");
  }

  if (car.quantity < orderData.quantity) {
    throw new Error("Insufficient stock");
  }

  const totalPrice = car.price * orderData.quantity;
  const newOrder = await Order.create({ ...orderData, totalPrice });

  // Update car inventory
  car.quantity -= orderData.quantity;
  if (car.quantity === 0) {
    car.inStock = false;
  }
  await car.save();

  return newOrder;
};

export const getAllOrders = async () => {
  return Order.find().populate("car").exec();
};

export const getOrderById = async (id: string) => {
  return Order.findById(id).populate("car").exec();
};

export const updateOrder = async (id: string, updateData: Partial<IOrder>) => {
  const order = await Order.findById(id);

  if (!order) {
    throw new Error("Order not found");
  }

  const car = await CarModal.findById(order.car);

  if (!car) {
    throw new Error("Car not found");
  }

  if (updateData.quantity) {
    // Adjust car stock for updated quantity
    const stockAdjustment = updateData.quantity - order.quantity;
    if (car.quantity < stockAdjustment) {
      throw new Error("Insufficient stock for update");
    }
    car.quantity -= stockAdjustment;
    if (car.quantity === 0) {
      car.inStock = false;
    } else {
      car.inStock = true;
    }
    await car.save();
  }

  Object.assign(order, updateData);
  return order.save();
};

export const deleteOrder = async (id: string) => {
  const order = await Order.findByIdAndDelete(id);

  if (!order) {
    throw new Error("Order not found");
  }

  const car = await CarModal.findById(order.car);
  if (car) {
    car.quantity += order.quantity;
    car.inStock = true;
    await car.save();
  }

  return order;
};
