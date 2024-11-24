import { Request, Response } from 'express'
import { ProductServices } from './product.service'

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body.product
    const result = await ProductServices.createProductIntoDB(product)
    res.status(200).json({
      success: true,
      messege: 'Successfully created',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDB()
    res.status(200).json({
      success: true,
      messege: 'Successfully get Data',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const result = await ProductServices.getSingleProductFromDB(productId)
    res.status(200).json({
      success: true,
      messege: 'Successfully get unique Data',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
}
