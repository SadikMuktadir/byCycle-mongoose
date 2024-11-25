import { Schema, model } from 'mongoose'
import { Bicycle } from './product.interface'

const bicycleSchema = new Schema<Bicycle>(
  {
    name: {
      type: String,
      required: true,
    },
    brand: { type: String, required: true },
    price: {
      type: Number,
      required: true,
      min: [0, 'Price cannot be negative'],
    },
    type: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
      required: true,
    },
    description: {
      type: String,
      required: true,
      minlength: [10, 'Description must be at least 10 characters long'],
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, 'Quantity cannot be negative'],
    },
    inStock: { type: Boolean, required: true, default: true },
  },
  { timestamps: true },
)

bicycleSchema.index({ name: 1 })

export const BicycleModel = model<Bicycle>('Bicycle', bicycleSchema)
