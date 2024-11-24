import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { ProductRoute } from './app/modules/products/product.route'
const app: Application = express()

// parser

app.use(express.json())
app.use(cors())

app.use('/api/v1/products', ProductRoute)

app.get('/', (req: Request, res: Response) => {
  const a = 10

  res.send(a)
})
export default app
