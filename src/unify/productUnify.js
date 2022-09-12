import { ProductRouter } from "../Routes/productRoutes.js"
import {ProductController} from "../controller/productController.js"
import { response } from '../response/response.js'
import { HttpCode } from '../response/httpcode.js'
import product from "../models/Product.js"

export const productModel = (expressRouter)=>{
    const controller = new ProductController("Product",product)
    const productRouter = new ProductRouter(expressRouter,controller,response,HttpCode)
    return productRouter.router
}