import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { ProductRoute } from './app/modules/products/product.route'
import { OrderRoute } from './app/modules/orders/order.route'

const app: Application = express()

// Parser
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/v1/products', ProductRoute)
app.use('/api/v1/orders', OrderRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Bicycle Store API')
})

export default app
