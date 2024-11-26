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

export const carsController = {
  createCar,
  getAllCars
};
