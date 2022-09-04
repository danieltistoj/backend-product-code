import { crudService } from "../services/crudService.js";
import supplier from "../models/Supplier.js"

const createSupplier = async (req,res) =>{
    const newCRUD = new crudService(req.body,supplier)
    res.send(await newCRUD.createService("Supplier"))
}

const getAllSuppliers = async (req, res) =>{
    const newCRUD = new crudService(req.body,supplier)
    res.send(await newCRUD.getAllData())
}

export {
    createSupplier,
    getAllSuppliers,
}