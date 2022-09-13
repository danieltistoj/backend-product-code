import {crudService} from "../services/crudService.js"
export class crudController extends crudService{
    constructor(title,model){
        super(model)
        this.title = title
    }
    async create(data){
        return await this.createService(this.title,data)
    }
    async getAll(){
        return await this.getAllData()
    }
    async getOne(params) {
        if(await this.validation(params)){
            return await this.getOneData(params)
        }
        else{
            const  error = new Error("No data found")
            throw error
        }
    }
    async update(params,data){
        if(await this.validation(params)){
            return await this.updateService(params,data)
        }else{
            const  error = new Error("No data found")
            throw error
        }
    }
    async deleteOne(params){
        if(await this.validation(params)){
            return await this.deleteService(params)
        }else{
            const  error = new Error("No data found")
            throw error
        }
    }
}
