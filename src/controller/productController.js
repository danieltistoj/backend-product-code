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
            //se evalua si el material ya esta en la lista 
            const some = product.materials.some(post => post.id === id_material)
            if(!some){
                //costo total = costo toal + costo del materil * cantidad 
                product.materialCost += modelMaterial.cost * material.amount
                //se agregan los datos del body a la lista de materiales
                product.materials.push(material)
                await product.save()
                return `the material was added successfully`
            }else{
                return "the material already exists"
            }
        }
        else{
            throw new Error(`The product ${filter.name} does not exist`)
        }
    }
}
