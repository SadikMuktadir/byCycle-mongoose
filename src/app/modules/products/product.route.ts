import express from 'express'
import { ProductController } from './product.controller'

const router = express.Router()

router.post('/create-product', ProductController.createProduct)
router.get('/', ProductController.getAllProduct)
router.get('/:productId', ProductController.getSingleProduct)
router.put('/:productId', ProductController.updateBicycle)
router.delete('/:productId', ProductController.deleteProduct)
export const ProductRoute = router
