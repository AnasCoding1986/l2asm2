import { Schema, model, connect } from 'mongoose';

export enum CarCategory {
  Sedan = 'Sedan',
  SUV = 'SUV',
  Truck = 'Truck',
  Coupe = 'Coupe',
  Convertible = 'Convertible',
}

export type Cars = {
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  category: CarCategory;
  description: string;
  quantity: number;
  inStock: boolean;
};
