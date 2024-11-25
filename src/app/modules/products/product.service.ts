import { BicycleModel } from './product.model'
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

const updateBicycle = async (
  productId: string,
  updateData: Partial<Bicycle>,
) => {
  try {
    const updatedBicycle = await BicycleModel.findByIdAndUpdate(
      productId,
      updateData,
      { new: true, runValidators: true },
    )

    if (!updatedBicycle) {
      throw new Error('Bicycle not found')
    }

    return updatedBicycle
  } catch (error) {
    console.log(error)
  }
}
const deleteBicycle = async (productId: string) => {
  try {
    const result = await BicycleModel.findByIdAndDelete(productId)

    if (!result) {
      throw new Error('Bicycle not found')
    }

    return { message: 'Bicycle successfully deleted' }
  } catch (error) {
    console.log(error)
  }
}

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateBicycle,
  deleteBicycle,
}
