import { Schema, model, connect } from 'mongoose';
import { CarCategory, Cars } from './cars/cars.interface';

const carsSchema = new Schema<Cars>({
    
        name: { type: String, required: true },
        brand: { type: String, required: true },
        model: { type: String, required: true },
        year: { type: Number, required: true },
        price: { type: Number, required: true, min: 0 },
        category: {
          type: String,
          enum: Object.values(CarCategory),
          required: true,
        },
        description: { type: String, required: true },
        quantity: { type: Number, required: true, min: 0 },
        inStock: { type: Boolean, default: true },
      },
      { timestamps: true },
    
)

const Car = model<Cars>('Car', carsSchema);

export default Car;