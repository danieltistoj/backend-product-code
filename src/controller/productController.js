import {crudController} from "./crudController.js"
export class ProductController extends crudController{
    constructor(title,model){
        super(title,model)
    }
    
    async addMaterials(materials,filter){
        if(await this.validation(filter)){
            //encontramos el user
            const user = await this.getOneData(filter)
            let totalCosts = 0
            try {
                //recorremos la lista y agregamos el material
                for(let i = 0; i <materials.length; i++){
                    //sumamos los sub costos
                    totalCosts +=materials[i].subCost
                    user.materials.push(materials[i])
                }
                user.materialCost = totalCosts
                await user.save()
                return user
            } catch (error) {
                console.log(error)
                return  error
            }
        }
        else{
            throw new Error(`The product ${filter.name} does not exist`)
        }
    }
}
