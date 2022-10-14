import {crudController} from "./crudController.js"

export class OrderMaterialController extends crudController{
    constructor(title,model){
        super(title,model)
    }
    async createOrderMaterial(order){
        try {
            //se crea la nueva orden 
            const newOrder = await this.createService(this.title,order)
            let totalCosts = 0
            const materials = order.materials
            //se calcula el costo total
            for(let i = 0; i <materials.length; i++){
                //sumamos los sub costos
                totalCosts +=materials[i].subCost
            }
            newOrder.totalCost = totalCosts
            await newOrder.save()
            return newOrder
        } catch (error) {
            return error
        }
    }

    
}
