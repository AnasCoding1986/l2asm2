import { CarModal } from "../cars.model";
import { Cars } from "./cars.interface";

const createCarIntoDB = async(car:Cars) => {
    const result = await CarModal.create(car);
    return result
}

export const carsServices = {
    createCarIntoDB,
}