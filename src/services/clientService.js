import Client from "../models/Client.js";

const createClientService = async(client)=>{
    let successful = false
    console.log(client)
    try {
        const newClient = new Client(client)
        await newClient.save();
        successful = true
    } catch (error) {
        console.log(error)
    }
    return successful
}
const updateClientService = async(client)=>{
    const email = client.email
    const existingClient = await Client.findOne({email})
    if(existingClient){
        existingClient
    }
    else{

    }
    
}
const getAllClientService = async(client)=>{

}
const getOneClientService= async(client)=>{
    
}
const deleteClientService= async(client)=>{
    
}

export{
    createClientService,
    updateClientService,
    getAllClientService,
    getOneClientService,
    deleteClientService,
}