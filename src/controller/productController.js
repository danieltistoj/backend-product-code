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
                //se agrega el  nombre 
                material.name = modelMaterial.name                //costo total = costo toal + costo del materil * cantidad 
                product.materialCost += modelMaterial.cost * material.amount
                //se agregan los datos del body a la lista de materiales
                product.materials.push(material)
                console.log(material)
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
        console.log(material)
        if(await this.validation(filter)){
            //obtenemos el producto 
            const product = await this.getOne(filter)
            //verificamos que el material exista en la lista
            const some = product.materials.some(material => material.id === id_material)
            if(!some){
                return "the material does not exist"
            }

            try {
                //obtenemos el actual material con sus datos
                const oldMaterial = product.materials.find(material => material.id === id_material)
                //obtenemos la posicion en donde esta para modificar despues
                const indexOldMaterial = product.materials.findIndex(material => material.id === id_material)
                //obtenemos actual sub costo del material
                const currentCost = oldMaterial.amount * material.cost 
                //le restamos esa cantidad al costo total actual
                product.materialCost -= currentCost
                //le sumamos el sub costo del material nuevo
                const newCost = amount * material.cost
                product.materialCost+=newCost
                //modificamos la cantidad del material en el registro
                //se elimina el material anterior 
                const newList = product.materials.filter(material => material.id !== id_material)
                console.log(newList)
                let newMaterial = []
                /*  esto se realiza si esque queda solo
                    un elemento, ya que si solo hay uno no devolvera un array
                    sino el objeto en si lo que dara error al insertar el nuevo objeto
                */
                if(!Array.isArray(newList)){ //si no es array
                    newMaterial.push(newList)
                    newMaterial.push({id:id_material,amount})
                    product.materials = newMaterial
                }else{//si es array
                    newList.push({id:id_material,amount})
                    product.materials = newList
                }
                console.log(product.materials)
                console.log(product.materialCost)
                product.save()
                
                //guardamos la modificacion
                //product.save()
                return "material modified correctly"
            }catch (error) {
                return error
            }    
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
    async updateCostMaterial(id_material,materialController){
        const listProduct = await this.getAll()
        let counter = 0
        for(const product of listProduct){
            const some = product.materials.some(material => material.id === id_material)
            if(some){
                const id_product = product._id
                const totalCost = await this.totalMaterialCosts(product.materials,materialController)
                await this.updateMaterialCost(id_product,totalCost)
                
                counter++
            }
        }
        return `se encotro en ${counter} productos el material`
    }
    async updateMaterialCost(id_pro,totalCost){
        const product = await this.getOne({_id:id_pro})
        product.materialCost = totalCost
        console.log(product.materialCost)
        console.log(product)
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
            //console.log(oldMaterial)
            //obtenemos el costo del material
            const costMaterial = oldMaterial.cost
            //sumamos al total de costo
            totalCosts += amount*costMaterial      
        }    
        return totalCosts
    }
}
