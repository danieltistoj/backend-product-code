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
 *         name:
 *           type: string
 *           description: nombre de usuario.
 *           example: daniel
 *         email:
 *           type: string
 *           description: email del usuario.
 *           example: daniel@gmail.com
 *         password:
 *           type: string
 *           description: contraseña del usuario.
 *           example: password1234
 *         rol:
 *           type: string
 *           description: el rol del usuario.
 *           example: retail
 *         confirmed: 
 *           type: string
 *           description: la confirmacion del usuario
 *           example: false || true
 *       required:
 *         -name
 *         -email
 *         -password
 *       example: 
 *         name: daniel
 *         email: daniel@gmail.com
 *         password: "123456"
 */



/**
 * @swagger
 * /api/v1/user/signUp:
 *   post:
 *     summary: Crear un usuario.
 *     tags: [User]
 *     requestBody:  
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: user created 
*/
/**
 * @swagger
 * /api/v1/user/signIn:
 *   post:
 *     summary: acceso o logueo a la app web.
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: email del usuario.
 *                 example: daniel@gmail.com
 *               password:
 *                 type: string
 *                 description: password del usuario.
 *                 example: 1234        
 *     responses:
 *       200:
 *         description: informacion de autenticacion.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 auth:
 *                   type: boolean
 *                   description: confirma la autenticacion.
 *                   example: true 
 *                 id:
 *                   type: string
 *                   description: el id del usuario.
 *                   example: 431431eefa3313123fdfd13221
 *                 email:
 *                   type: string
 *                   description: el email del usuario.
 *                   example: daniel@gmail.com
 *                 token:
 *                   type: string
 *                   description: token de autenticacion.
 *                   example: efadaerafdafaf231fdfasdfa...
 *       400:
 *         description: no se pudo autenticar.      
*/

/**
 * @swagger
 * /api/v1/user/getOneUser/{id}:
 *   get:
 *     summary: Get one user.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the user id
 *     responses:  
 *       200: 
 *         description: retorna la informacion de un usuario
 *       400:
 *         description: user not found
*/