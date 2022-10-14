import { OrderMaterialRouter } from "../Routes/orderMaterialRoutes.js"
import {OrderMaterialController} from "../controller/orderMaterialController.js"
import { response } from '../response/response.js'
import { HttpCode } from '../response/httpcode.js'
import {middleware } from "../helpers/middleware.js"
import orderMaterial from "../models/OrderMaterial.js"

export const OrderMaterialModel = (expressRouter)=>{
    const controller = new OrderMaterialController("Order Material",orderMaterial)
    const orderMaterialRouter = new OrderMaterialRouter(expressRouter,controller,response,HttpCode,middleware)
    return orderMaterialRouter.router
}