import { ProductOrderRouter } from "../Routes/productOrderRoutes.js";
import { ProductOrderController } from "../controller/productOrderController.js";
import { response } from '../response/response.js'
import { HttpCode } from '../response/httpcode.js'
import {middleware } from "../helpers/middleware.js"
import productOrder from "../models/ProductOrder.js"

export const productOrderModel = (expressRouter)=>{
    const controller = new ProductOrderController("ProductOrder",productOrder)
    const productOrderRouter = new ProductOrderRouter(expressRouter,controller,response,HttpCode,middleware)
    return productOrderRouter.router
}
