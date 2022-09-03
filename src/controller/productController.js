import{
    createProductService,

} from "../services/productService.js"

const createProduct = async (req,res)=>{
    if(createProductService(req.body)){
        res.send("Product created successfully")
    }else{
        res.send("Product not created")
    }

}

export {
    createProduct,
}