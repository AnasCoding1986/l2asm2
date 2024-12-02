import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { carRouter } from './app/modules/cars/cars.route';
import { orderRouter } from './app/modules/orders/orders.route';
const app: Application = express();
const port = 3000;

// parser
app.use(express.json());
app.use(cors());

// applications routes
app.use('/api/v1/cars', carRouter);
app.use("/api/v1/orders", orderRouter);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/', getAController);

export default app;
