import RawMaterial from "../models/RawMaterial.js";

const createRawMaterialService = async(rawMaterial)=>{
    let successful = false
    console.log(rawMaterial)
    try{
        const newRawMaterial = new RawMaterial(rawMaterial)
        console.log(newRawMaterial)
        await newRawMaterial.save()
        successful = true
    }catch(error){
        console.log(error)
    }
    return successful
}

const updateClientRawMaterialService = async(rawMaterial)=>{
    
}
const getAllClientRawMaterialService = async(rawMaterial)=>{

}
const getOneRawMaterialService = async(rawMaterial)=>{
    
}
const deleteRawMaterialService = async(rawMaterialSchema)=>{
    
}

export{
    createRawMaterialService,
}