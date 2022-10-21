import { ProductOrderRouter } from "../Routes/productOrderRoutes.js";
import { ProductOrderController } from "../controller/productOrderController.js";
import { response } from '../response/response.js'
import { HttpCode } from '../response/httpcode.js'
import {middleware } from "../helpers/middleware.js"
import productOrder from "../models/ProductOrder.js"
//productOrder
import { ProductController } from "../controller/productController.js"
import Product from "../models/Product.js";

export const productOrderModel = (expressRouter)=>{
    //product controller
    const product = new ProductController("Product", Product)
    //product order
    const controller = new ProductOrderController("ProductOrder",productOrder)
    const productOrderRouter = new ProductOrderRouter(expressRouter,controller,response,HttpCode,middleware,product)
    return productOrderRouter.router
}
