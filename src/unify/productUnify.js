import { ProductRouter } from "../Routes/productRoutes.js"
import {ProductController} from "../controller/productController.js"
import { response } from '../response/response.js'
import { HttpCode } from '../response/httpcode.js'
import {middleware } from "../helpers/middleware.js"
import product from "../models/Product.js"
//Material
import rawMaterial from "../models/RawMaterial.js"
import {RawMaterialController} from "../controller/rawMaterialController.js"


export const productModel = (expressRouter)=>{
    //matrial 
    const material = new RawMaterialController("RawMaterial",rawMaterial)
    //product 
    const controller = new ProductController("Product",product)
    const productRouter = new ProductRouter(expressRouter,controller,response,HttpCode,middleware,material)
    return productRouter.router
}
    /**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The user ID.
 *           example: 0
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: Leanne Graham
 */