import { Schema, model } from 'mongoose'
import { Bicycle } from './products/product.interface'

const bicycleSchema = new Schema<Bicycle>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  type: {
    type: String,
    enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
})

export const BicycleModel = model<Bicycle>('Bicycle', bicycleSchema)
