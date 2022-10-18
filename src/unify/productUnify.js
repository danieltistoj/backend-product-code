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
 *     Product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: nombre del producto.
 *           example: producto1
 *         type:
 *           type: string
 *           description: tipo de producto.
 *           example: tipo1
 *         category:
 *           type: string
 *           description: contegoria del producto.
 *           example: categoria5
 *         description:
 *           type: string
 *           description: descripcion del producto.
 *           example: descripcion
 *         stocks: 
 *           type: Integer
 *           description: stock del producto.
 *           example: 40
 *         price: 
 *           type: Number
 *           description: precio del producto.
 *           example: 200.9
 *         materialCost: 
 *           type: Number
 *           description: costo total de materiales
 *           example: 100.50
 *         productionCost:  
 *           type: Number
 *           description: costo total de produccion
 *           example: 60.50
 *         state:  
 *           type: boolean
 *           description: estado del producto
 *           example: true
 *         materials:  
 *           type: Array
 *           description: lista de productos
 *           example: [{},{},{},{},{},{},{},{},{}]
 *       required:
 *         -name
 *         -type
 *         -category
 *         -description
 *       example: 
 *         name: producto1
 *         type: tipo1
 *         category: category1
 *         description: description1
 */
/**
 * @swagger
 * /api/v1/product/createProduct:
 *   post:
 *     summary: Crear un nuevo producto.
 *     tags: [Product]
 *     requestBody:  
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: product created 
*/

/**
 * @swagger
 * /api/v1/product/getAllProduct:
 *   get:
 *     summary: Retorna todos los productos.
 *     tags: [Product]
 *     responses:  
 *       200: 
 *         description: Retorna todos los boletines.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
*/
/**
 * @swagger
 * /api/v1/product/getOneProduct/{id}:
 *   get:
 *     summary: Retorna un producto.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id del producto
 *     responses:  
 *       200: 
 *         description: Retorna un producto.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Product not found
*/
/**
 * @swagger
 * /api/v1/product/upDateProduct/{id}:
 *   put:
 *     summary: update a product.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del producto
 *     requestBody:  
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Product'
 *     responses:  
 *       200: 
 *         description: product updated!
 *       400:
 *         description: product not found
*/

/**
 * @swagger
 * /api/v1/product/deleteProduct/{id}:
 *   delete:
 *     summary: delete a product.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the product id
 *     responses:  
 *       200: 
 *         description: product deleted
 *       400:
 *         description: product not found
*/

/**
 * @swagger
 * /api/v1/product/AddMaterial/{id}:
 *   put:
 *     summary: Se agrega un material al producto.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id del producto
 *     requestBody:  
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: el id del material.
 *                 example: 63179dfdb7eed1649c214f7f 
 *               amount:
 *                 type: Integer
 *                 description: La cantidad que se necesita.
 *                 example: 9
 *     responses:  
 *       200: 
 *         description: product updated!
 *       400:
 *         description: product not found
*/
/**
 * @swagger
 * /api/v1/product/deleteMaterial/{id}:
 *   put:
 *     summary: Se elimina el material de los productos relacionados.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id del material
 *     responses:  
 *       200: 
 *         description: product updated!
 *       400:
 *         description: product not found
*/
/**
 * @swagger
 * /api/v1/product/updateAmountMaterial/{id}:
 *   put:
 *     summary: Se modifica la cantidad del material.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id del producto
 *     requestBody:  
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: el id del material.
 *                 example: 63179dfdb7eed1649c214f7f 
 *               amount:
 *                 type: Integer
 *                 description: La cantidad que se necesita.
 *                 example: 9
 *     responses:  
 *       200: 
 *         description: product updated!
 *       400:
 *         description: product not found
*/

/**
 * @swagger
 * /api/v1/product/updateCostMaterial/{id}:
 *   put:
 *     summary: Se actualizan los costos del material modificado.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id del material
 *     responses:  
 *       200: 
 *         description: product updated!
 *       400:
 *         description: product not found
*/