import { crudService } from "../services/crudService.js";
import supplier from "../models/Supplier.js"

const createSupplier = async (req,res) =>{
    const newCRUD = new crudService(req.body,supplier)
    res.send(await newCRUD.createService("Supplier"))
}

export {
    createSupplier
}