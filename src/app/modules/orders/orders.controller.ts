import { Request, Response } from "express";
import * as OrderService from "./orders.service";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await OrderService.createOrder(req.body);
    res.status(201).json({
      message: "Order created successfully",
      success: true,
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create order",
      success: false,
      error: console.log(error),
    });
  }
};

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await OrderService.getAllOrders();
    res.status(200).json({
      message: "Orders retrieved successfully",
      success: true,
      data: orders,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to retrieve orders",
      success: false,
      error: console.log(error),
    });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await OrderService.getOrderById(req.params.id);
    if (!order) {
      return res.status(404).json({
        message: "Order not found",
        success: false,
      });
    }
    res.status(200).json({
      message: "Order retrieved successfully",
      success: true,
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to retrieve order",
      success: false,
      error: console.log(error),
    });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const updatedOrder = await OrderService.updateOrder(req.params.id, req.body);
    res.status(200).json({
      message: "Order updated successfully",
      success: true,
      data: updatedOrder,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update order",
      success: false,
      error: console.log(error),
    });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const deletedOrder = await OrderService.deleteOrder(req.params.id);
    res.status(200).json({
      message: "Order deleted successfully",
      success: true,
      data: deletedOrder,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete order",
      success: false,
      error: console.log(error),
    });
  }
};
