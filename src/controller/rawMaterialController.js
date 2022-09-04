import {crudService} from "../services/crudService.js"
import RawMaterial from "../models/RawMaterial.js"

const createRawMaterial = async (req,res)=>{
    const newCRUD = new crudService(req.body,RawMaterial) 
    res.send( await newCRUD.createService("Raw Material") )
}

export {
    createRawMaterial,
}

