import { BicycleModel } from '../product.model'
import { Bicycle } from './product.interface'

const createProductIntoDB = async (product: Bicycle) => {
  const result = await BicycleModel.create(product)
  return result
}
const getAllProductFromDB = async () => {
  const result = await BicycleModel.find()
  return result
}
const getSingleProductFromDB = async (_id: string) => {
  const result = await BicycleModel.findOne({ _id })
  return result
}
export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
}
