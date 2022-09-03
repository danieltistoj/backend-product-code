import {
    createClientService,
    deleteClientService,
    getAllClientService,
    updateClientService,
    getOneClientService,
} from "../services/clientService.js"


const createClient = async (req,res)=>{
    if(createClientService(req.body)){
        res.send("Client created successfully")
    }else{
        res.send("Client not created")
    }
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