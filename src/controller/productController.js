import{
    createProductService,

} from "../services/productService.js"

const createProduct = async (req,res)=>{
    if(createProductService(req.body)){
        res.send("Client created successfully")
    }else{
        res.send("Client not created")
    }

}

export {
    createProduct,
}