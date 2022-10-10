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

    async deleteMaterialAllProduct(id,materialController){
        //1. obtener la lista de productos 
        const listProduct = await this.getAll()
        let contador = 0
        listProduct.forEach((product)=>{
            /*
            verificamos que el material este en la lista 
            de materiales del producto
            */ 
            const some = product.materials.some(material => material.id === id)
            if(some){
            const id_product = product._id
            this.deleteMaterial(id_product,id,materialController)
            contador++
            }
        })//fin ciclo
        return `El material esta en ${contador} productos` 
    }

    async deleteMaterial(id_product,id_material,materialController){
        const product = await this.getOne({_id:id_product})
        console.log("name product",product.name)
        console.log(product.materials) 
        //descartamos el material en la lista 
        const newList = product.materials.filter(material => material.id !== id_material)
        //agregamos la nueva lista al producto 
        product.materials = newList
        //recontamos el total de costo de material 
        console.log("Total costo de material: ", await this.totalMaterialCosts(newList,materialController))
        console.log(newList)
        return newList
    }

       async totalMaterialCosts(materials,materialController){
        let totalCosts = 0
        for(const material of materials){
            //obtenermos la cantidad que requiere 
            const amount = material.amount
            //obtenemos toda la informacion del material
            const oldMaterial = await  materialController.getOne({_id:material.id})
            console.log(oldMaterial)
            //obtenemos el costo del material
            const costMaterial = oldMaterial.cost
            //sumamos al total de costo
            totalCosts += amount*costMaterial      
        }    
        return totalCosts
    }
}
