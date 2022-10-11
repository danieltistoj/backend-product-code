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
            //eliminamos el material de la lista de producto 
            this.deleteMaterial(id_product,id,materialController)
            contador++
            }
        })//fin ciclo
        return `El material se elimino de  ${contador} productos` 
    }

    async updateAmountMaterial(filter,data,materialController){
        const id_material = data.id
        const amount = data.amount
        //verificamos que exita el material
        if(!await materialController.validation({_id:id_material})){
            throw new Error( "material does not exist")
        }
        //obtenemos el material 
        const material = await materialController.getOne({_id:id_material})
        if(await this.validation(filter)){
            //obtenemos el producto 
            const product = await this.getOne(filter)
            //verificamos que el material exista en la lista
            const some = product.materials.some(material => material.id === id_material)
            if(!some){
                return "the material does not exist"
            }
            const oldMaterial = product.materials.find(material => material.id === id_material)
            const indexOldMaterial = product.materials.findIndex(material => material.id === id_material)
            console.log(indexOldMaterial)
            return oldMaterial
           // const newSubCost = amount * material.cost
            
            
        }
    }

    async deleteMaterial(id_product,id_material,materialController){
        const product = await this.getOne({_id:id_product})
        console.log("name product",product.name)
        console.log(product.materials) 
        //descartamos el material en la lista 
        const newList = product.materials.filter(material => material.id !== id_material)
        const removedMaterial = product.materials.find(material => material.id === id_material)
        //agregamos la nueva lista al producto 
        product.materials = newList
        //obtenemos el nuevo costo 
        const newCost = product.materialCost -  await this.subCostMaterial(removedMaterial,materialController)
        //agregamos el nuevo costo
        product.materialCost = newCost
        console.log("nuevo costo: ",product.materialCost)
        console.log("nueva lista",product.materials)
        //guardamos 
        product.save()

    }

    //obtenemos el subtotal con la cantidad del material y su costo 
    async subCostMaterial(material, materialController){
        let subTotal = 0
        //obtenermos la cantidad que requiere 
        const amount = material.amount 
        //obtenemos toda la informacion del material
        const oldMaterial = await  materialController.getOne({_id:material.id})
         //obtenemos el costo del material
        const costMaterial = oldMaterial.cost
        subTotal = amount * costMaterial
        return subTotal
    }

    //para hacer el reconteo del total de costo de material
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
