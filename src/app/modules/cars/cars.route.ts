import express from 'express';
import { carsController } from './cars.controller';

const router = express.Router();

// will call controller func
router.post('/create-car', carsController.createCar);

router.get("/", carsController.getAllCars);

router.get("/:studentId", carsController.singleCar)

export const carRouter = router;
