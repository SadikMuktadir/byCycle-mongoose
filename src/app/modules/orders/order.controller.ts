import { Request, Response } from 'express'
import OrderService from './order.service'
import { Order } from './order.interface'
import { RevenueResult } from './order.interface'

class OrderController {
  static async createOrder(req: Request, res: Response): Promise<void> {
    try {
      const { email, product, quantity, totalPrice } = req.body
      const order: Order = await OrderService.createOrder(
        email,
        product,
        quantity,
        totalPrice,
      )
      res.status(201).json({
        message: 'Order created successfully',
        status: true,
        data: order,
      })
    } catch (error) {
      res.status(500).json({
        message: error || 'An error occurred while creating the order.',
        status: false,
      })
    }
  }
  static async getRevenue(req: Request, res: Response): Promise<void> {
    try {
      const revenue: RevenueResult = await OrderService.calculateRevenue()
      res.status(200).json({
        message: 'Revenue calculated successfully',
        status: true,
        data: revenue,
      })
    } catch (error) {
      res.status(500).json({
        message: error || 'An error occurred while calculating revenue.',
        status: false,
      })
    }
  }
}

export default OrderController
