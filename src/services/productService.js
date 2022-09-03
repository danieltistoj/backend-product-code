import Product from "../models/Product.js";

const createProductService = async(product)=>{
    let successful = false;
    try {
        const newProduct = new Product(product)
        await newProduct.save()
        successful=true
    } catch (error) {
        console.log(error);
        
    }
    return successful
}
const updateProductService = async(product)=>{
    
}
const getAllProductService = async(product)=>{

}
const getOneProductService= async(product)=>{
    
}
const deleteProductService= async(product)=>{
    
}

export{
    createProductService,
}