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
    res.status(500).json({
      success: false,
      messege: 'Something wrong',
      error: error,
    })
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
const updateBicycle = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const updateData = req.body

    const updatedBicycle = await ProductServices.updateBicycle(
      productId,
      updateData,
    )

    res.status(200).json({
      success: true,
      message: 'Bicycle updated successfully',
      data: updatedBicycle,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error || 'Failed to update bicycle',
    })
  }
}
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const result = await ProductServices.deleteBicycle(productId)

    res.status(200).json({
      success: true,
      message: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    })
  }
}
export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateBicycle,
  deleteProduct,
}
