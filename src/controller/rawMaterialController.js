import {crudService} from "../services/crudService.js"
import RawMaterial from "../models/RawMaterial.js"

const createRawMaterial = async (req,res)=>{
    const newCRUD = new crudService(req.body,RawMaterial) 
    res.send( await newCRUD.createService("Raw Material") )
}

const getAllRawMaterial =  async (req, res) =>{
    const newCRUD = new crudService(req.body,RawMaterial)
    res.send(await newCRUD.getAllData())
}
const getOneRawMaterial = async (req, res) =>{
    const newCRUD = new crudService(req.body,RawMaterial)
    res.send(await newCRUD.getOneData(req.params))
}

const updateRawMaterial = async (req, res) =>{
    const newCRUD = new crudService(req.body,RawMaterial)
    if(await newCRUD.validation(req.params)){
        res.send(await newCRUD.updateService(req.params,req.body))
    }else{
        res.send("No data found")
    }
}

const deleteRawMaterial = async (req,res)=>{
    const newCRUD = new crudService(req.body,RawMaterial)
    if(await newCRUD.validation(req.params)){
        res.send(await newCRUD.deleteService(req.params))
    }else{
        res.send("No data found")
    }
}

export {
    createRawMaterial,
    getAllRawMaterial,
    getOneRawMaterial,
    updateRawMaterial,
    deleteRawMaterial,
}

