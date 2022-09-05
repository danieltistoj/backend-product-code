import {crudService} from "../services/crudService.js"
import client from "../models/Client.js"


const createClient = async (req,res)=>{
    const newCRUD = new crudService(req.body,client)
    res.send(await newCRUD.createService("Client"))
}

const getAllClient = async (req,res)=>{
    const newCRUD = new crudService(req.body,client)
    res.send(await newCRUD.getAllData())
}
const getOneClient = async (req,res)=>{
    const newCRUD = new crudService(req.body,client)
    res.send(await newCRUD.getOneData(req.params))
}
const updateClient = async (req,res)=>{
    const newCRUD = new crudService(req.body,client)
    if(await newCRUD.validation(req.params)){
        res.send(await newCRUD.updateService(req.params,req.body))
    }else{
        res.send("No data found")
    }
}
const deleteClient = async (req,res)=>{
    const newCRUD = new crudService(req.body,client)
    if(await newCRUD.validation(req.params)){
        res.send(await newCRUD.deleteService(req.params))
    }else{
        res.send("No data found")
    }
}

export{
    createClient,
    updateClient,
    getAllClient,
    getOneClient,
    deleteClient,
}