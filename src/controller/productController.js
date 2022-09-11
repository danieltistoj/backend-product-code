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
    async getAllProduct(req,res){

    }
    async getOneProduct(req,res) {
        res.send(await this.getOneData(req.params))
    }
    async updateProduct (req,res){
        if(await this.validation(req.params)){
            res.send(await this.updateService(req.params,req.body))
        }else{
            res.send("No data found")
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
