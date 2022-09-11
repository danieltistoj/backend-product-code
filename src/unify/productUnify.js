import { ProductRouter } from "../Routes/productRoutes.js"
import {ProductController} from "../controller/productController.js"
export const productModel = (expressRouter)=>{
    const controller = new ProductController("Product")
    const productRouter = new ProductRouter(expressRouter,controller)
    return productRouter.router
}