import { crudService } from "../services/crudService.js"
import client from "../models/Client.js"


const createClient = async (req,res)=>{
    const newCRUD = new crudService(req.body,client)
    res.send(await newCRUD.createService("Client"))
}

const updateClient = async(client)=>{
    
}

const getAllClient = async(client)=>{

}
const getOneClient = async(client)=>{
    
}
const deleteClient = async(client)=>{
    
}

export{
    createClient,
    updateClient,
    getAllClient,
    getOneClient,
    deleteClient,
}