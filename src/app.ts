import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { carRouter } from './app/modules/cars/cars.route';
const app: Application = express();
const port = 3000;

// parser
app.use(express.json());
app.use(cors());

// applications routes
app.use('/api/v1/cars', carRouter);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/', getAController);

export default app;
