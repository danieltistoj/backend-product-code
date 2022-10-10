import {crudController} from "./crudController.js"
export class ProductController extends crudController{
    constructor(title,model){
        super(title,model)
    }
    
    async addMaterial(material,filter,materialController){
        const id_material = material.id
        //se comprueba que el material exista
        if(!await materialController.validation({_id:id_material})){
            throw new Error( "material does not exist")
        }
        const modelMaterial = await materialController.getOne({_id:id_material})
       
        if(await this.validation(filter) ){
            //encontramos el producto
            const product = await this.getOneData(filter)
            product.materialCost += modelMaterial.cost * material.amount
            product.materials.push(material)
            await product.save()
            return `costo total material: ${product.materialCost}`
        }
        else{
            throw new Error(`The product ${filter.name} does not exist`)
        }
    }
}
