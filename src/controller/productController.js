import {crudService} from "../services/crudService.js"
import product  from "../models/Product.js"

export class ProductController extends crudService{
    constructor(title){
        super(product)
        this.title = title
    }
    async createProduct(data){
        return await this.createService(this.title,data)
    }
    async getAllProduct(){
        return await this.getAllData()
    }
    async getOneProduct(params) {
        if(await this.validation(params)){
            return await this.getOneData(params)
        }
        else{
            const  error = new Error("No data found")
            throw error
        }
    }
    async updateProduct (params,data){
        if(await this.validation(params)){
            return await this.updateService(params,data)
        }else{
            const  error = new Error("No data found")
            throw error
        }
    }
    async deleteProduct (req,res){
        if(await this.validation(req.params)){
            res.send(await this.deleteService(req.params))
        }else{
            res.send("No data found")
        }
    }
}
