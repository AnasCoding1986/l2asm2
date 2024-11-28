import { CarModal } from '../cars.model';
import { Cars } from './cars.interface';

const createCarIntoDB = async (car: Cars) => {
  const result = await CarModal.create(car);
  return result;
};

const getAllCarDB = async () => {
  const result = await CarModal.find();
  return result;
};

const getSingleCarDB = async (_id: string) => {
  const result = await CarModal.findOne({ _id });
  return result;
};

export const carsServices = {
  createCarIntoDB,
  getAllCarDB,
  getSingleCarDB,
};
