import {crudService} from "../services/crudService.js"
import product from "../models/Product.js"

const createProduct = async (req,res)=>{
    const newCRUD = new crudService(req.body,product)
    res.send(await newCRUD.createService("Product"))
}

const getAllProduct = async (req,res)=>{
    const newCRUD = new crudService(req.body,product)
    res.send(await newCRUD.getAllData(product))
}
export {
    createProduct,
    getAllProduct,
}