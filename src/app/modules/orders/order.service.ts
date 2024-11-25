import OrderModel from './order.model'
import { Order } from './order.interface'
import { RevenueResult } from './order.interface'
class OrderService {
  static async createOrder(
    email: string,
    product: string,
    quantity: number,
    totalPrice: number,
  ): Promise<Order> {
    const newOrder = new OrderModel({
      email,
      product,
      quantity,
      totalPrice,
    })
    return await newOrder.save()
  }

  static async calculateRevenue(): Promise<RevenueResult> {
    try {
      const revenue = await OrderModel.aggregate([
        {
          $lookup: {
            from: 'bicycles',
            localField: 'product',
            foreignField: '_id',
            as: 'productDetails',
          },
        },
        { $unwind: '$productDetails' },
        {
          $addFields: {
            revenuePerOrder: {
              $multiply: ['$productDetails.price', '$quantity'],
            },
          },
        },
        {
          $group: {
            _id: null,
            totalRevenue: { $sum: '$revenuePerOrder' },
          },
        },
      ])

      if (revenue.length > 0) {
        return {
          totalRevenue: revenue[0].totalRevenue,
        }
      } else {
        return {
          totalRevenue: 0,
        }
      }
    } catch (error) {
      throw new Error('Error calculating revenue: ' + error)
    }
  }
}

export default OrderService
