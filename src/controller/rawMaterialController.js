import {
    createRawMaterialService
} from "../services/rawMaterialService.js"

const createRawMaterial = async (req,res)=>{
    console.log(req.body)
    if(createRawMaterialService(req.body)){
        res.send("rawMaterial created successfully")
    }else{
        res.send("rawMaterial not created")
    }

}

export {
    createRawMaterial,
}

