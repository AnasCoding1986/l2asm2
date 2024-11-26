import { CarModal } from "../cars.model";
import { Cars } from "./cars.interface";

const createCarIntoDB = async(car:Cars) => {
    const result = await CarModal.create(car);
    return result
}

const getAllStudentDB = async() => {
    const result = await CarModal.find();
    return result
}

export const carsServices = {
    createCarIntoDB,
    getAllStudentDB
}