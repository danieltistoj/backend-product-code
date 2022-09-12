import { RawMaterialRouter } from "../Routes/rawMaterialRoutes.js"
import {RawMaterialController} from "../controller/rawMaterialController.js"
import { response } from '../response/response.js'
import { HttpCode } from '../response/httpcode.js'
import rawMaterial from "../models/RawMaterial.js"

export const rawMaterialModel = (expressRouter)=>{
    const controller = new RawMaterialController("Raw Material",rawMaterial)
    const rawMaterialRouter = new RawMaterialRouter(expressRouter,controller,response,HttpCode)
    return rawMaterialRouter.router
}