import { ObjectId } from 'mongoose'

export interface Order {
  _id: ObjectId
  email: string
  product: ObjectId
  quantity: number
  totalPrice: number
  createdAt: Date
  updatedAt: Date
}

export interface RevenueResult {
  totalRevenue: number
}
