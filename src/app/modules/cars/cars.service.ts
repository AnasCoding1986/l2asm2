import { CarModal } from '../cars.model';
import { Cars } from './cars.interface';

// Service to create a car in the DB
const createCarIntoDB = async (car: Cars) => {
  const result = await CarModal.create(car);
  return result;
};

// Service to get all cars from the DB
const getAllCarDB = async () => {
  const result = await CarModal.find();
  return result;
};

// Service to get a single car by ID
const getSingleCarDB = async (_id: string) => {
  const result = await CarModal.findOne({ _id });
  return result;
};

// Service to update a car in the DB
const updateCarDB = async (_id: string, data: Cars) => {
  const result = await CarModal.findByIdAndUpdate({_id}, data, { new: true });
  return result;
};

// Service to delete a car from the DB
const deleteCarDB = async (_id: string) => {
  const result = await CarModal.findByIdAndDelete(_id);
  return result;
};

export const carsServices = {
  createCarIntoDB,
  getAllCarDB,
  getSingleCarDB,
  updateCarDB,
  deleteCarDB
};
