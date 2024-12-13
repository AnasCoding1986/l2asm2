import { Request, Response } from 'express';
import { carsServices } from './cars.service';

const createCar = async (req: Request, res: Response) => {
  const { cars: carsData } = req.body;

  try {
    const result = await carsServices.createCarIntoDB(carsData);

    res.status(200).json({
      success: true,
      message: 'cars is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await carsServices.getAllCarDB();

    res.status(200).json({
      success: true,
      message: 'Cars are retrived successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const singleCar = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await carsServices.getSingleCarDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Single Car retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateCarController = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const body = req.body;
    const result = await carsServices.updateCarDB(studentId,body);

    res.status(200).json({
      success: true,
      message: 'Car updated successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteCar = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await carsServices.deleteCarDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Car deleted successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const carsController = {
  createCar,
  getAllCars,
  singleCar,
  updateCarController,
  deleteCar
};
