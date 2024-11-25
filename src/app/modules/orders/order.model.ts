import mongoose, { Schema, Document } from 'mongoose'
import { Order } from './order.interface'

const orderSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
)

// Create the Order model
const OrderModel = mongoose.model<Order & Document>('Order', orderSchema)

export default OrderModel
