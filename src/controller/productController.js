import {crudService} from "../services/crudService.js"
import product  from "../models/Product.js"


const createProduct = async (req,res)=>{
    const newCRUD = new crudService(req.body,product)
    res.send(await newCRUD.createService("Product"))
}

const getAllProduct = async (req,res)=>{
    const newCRUD = new crudService(req.body,product)
    res.send(await newCRUD.getAllData())
}
const getOneProduct = async (req,res)=>{
    const newCRUD = new crudService(req.body,product)
    res.send(await newCRUD.getOneData(req.params))
}
const updateProduct = async (req,res)=>{
    const newCRUD = new crudService(req.body,product)
    if(await newCRUD.validation(req.params)){
        res.send(await newCRUD.updateService(req.params,req.body))
    }else{
        res.send("No data found")
    }
}
const deleteProduct = async (req,res)=>{
    const newCRUD = new crudService(req.body,product)
    if(await newCRUD.validation(req.params)){
        res.send(await newCRUD.deleteService(req.params))
    }else{
        res.send("No data found")
    }
}
export {
    createProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
}