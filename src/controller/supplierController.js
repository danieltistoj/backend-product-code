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
const getOneSupplier = async (req, res) =>{
    const newCRUD = new crudService(req.body,supplier)
    res.send(await newCRUD.getOneData(req.params))
}

const updateSupplier = async (req, res) =>{
    const newCRUD = new crudService(req.body,supplier)
    if(await newCRUD.validation(req.params)){
        res.send(await newCRUD.updateService(req.params,req.body))
    }else{
        res.send("No data found")
    }
}

const deleteSupplier = async (req,res)=>{
    const newCRUD = new crudService(req.body,supplier)
    if(await newCRUD.validation(req.params)){
        res.send(await newCRUD.deleteService(req.params))
    }else{
        res.send("No data found")
    }
}
export {
    createSupplier,
    getAllSuppliers,
    getOneSupplier,
    updateSupplier,
    deleteSupplier,
}