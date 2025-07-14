import Router from 'express'
import { newProduct } from '../controllers/productController.js'

const productRouter = Router()
 productRouter.post("/",newProduct)



 export default productRouter