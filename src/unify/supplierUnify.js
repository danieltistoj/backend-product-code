import { SupplierRouter } from "../Routes/supplierRoutes.js"
import {SupplierController } from "../controller/supplierController.js"
import { response } from '../response/response.js'
import { HttpCode } from '../response/httpcode.js'
import {middleware } from "../helpers/middleware.js"
import supplier from "../models/Supplier.js"

export const supplierModel = (expressRouter)=>{
    const controller = new SupplierController("Supplier",supplier)
    const supplierRouter = new SupplierRouter(expressRouter,controller,response,HttpCode,middleware)
    return supplierRouter.router
}