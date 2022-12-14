import {crudController} from "./crudController.js"
export class ProductOrderController extends crudController{
    constructor(title,model){
        super(title,model)
    }
    async createProductOrder(data,date,productController){
        
        //si no existe 
        if(!await this.validation({idProduct:data.idProduct})){
           //obtenemos el producto 
            const product = await productController.getOne({_id:data.idProduct})
            if(product.stocks==0){
                const error = new Error("no stock for order")              
                throw error
            }else{
                try {
                    const newData = this.createOrder(data,0,product.stocks)
                    return await this.create(newData)
                } catch (error) {
                    throw error
                }
            }
        }else{
             //obtenemos el producto 
            const product = await productController.getOne({_id:data.idProduct})
            //obtener todas las ordenes
            const listOrder = await this.getAll()
            //filtrar por el id del producto 
            const filteredList = listOrder.filter(order => order.idProduct === data.idProduct)
            //se obtienen los dias para entregar un producto y se retorna la fecha
            const dateOrder = this.orderDate(date,product.deliveryQuantity)
            console.log(dateOrder)
            //se  obtiene el registro donde esta la orden
            const desiredOrder = filteredList.find(order => order.date ===dateOrder)
            if(!(desiredOrder === undefined)){
                const order = desiredOrder.order
                const stock = desiredOrder.newStock
                try {
                    const newData = this.createOrder(data,order,stock)
                    return await this.create(newData)
                } catch (error) {
                    throw error
                }
                
            }else{
                //si no encuentra orden los dias designados de entrega
                try {
                    const stock = desiredOrder.newStock
                    const newData = this.createOrder(data,0,stock)
                    return await this.create(newData)
                } catch (error) {
                    throw error
                }
            }
        }
    }
    async getSpecificOrder(idProduct){
        if(this.validation({idProduct})){
            const allOrders = await this.getAll()
            //filtrar por el id del producto 
            const filteredList = allOrders.filter(order => order.idProduct === idProduct)
            return filteredList
        }else{
            throw "no product orders"
        }
    }

    async getDataMatrix(idProduct){
        const listOrder = await this.getSpecificOrder(idProduct)
        let mainList = []
        for(const order of  listOrder){
            let listOrder = 
            [
                order.arrival,
                order.stock,
                order.total,
                order.order,
                order.sale,
                order.newStock
            ]
            mainList.push(listOrder)
        }
        console.log(mainList)
        return mainList
    }
    async getArrayDate(idProduct){
        const listOrder = await this.getSpecificOrder(idProduct)
        let mainList = []
        for(const order of  listOrder){
            mainList.push(order.date)
        }
        return mainList

    }
    async updateProductOrder(data){
        
    }
    //formar orden
    createOrder(data,orderOld,stockOld){
        const date = new Date()
        data.arrival = orderOld
        data.stock = stockOld
        data.total = data.arrival + data.stock
        data.newStock = data.total - data.sale
        data.date = this.createDateFormat(date)
        //si la venta es mayor al disponible en el stock 
        if(data.total < data.sale){
            const error = new Error("there is no product for sale")
            throw error
        }else{
            const newData = {
                arrival: data.arrival,
                stock: data.stock,
                total: data.total,
                order: data.order,
                sale: data.sale,
                newStock: data.newStock,
                date:data.date,
                idProduct: data.idProduct
            }
            return newData
        }
    }
    //obtenemos la fecha en la que se pidio una orden
    orderDate(date,days){
        date.setDate(date.getDate()-days)
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        return `${day}/${month}/${year}`
    }
    createDateFormat(data){
        const day = data.getDate()
        const month = data.getMonth() + 1
        const year = data.getFullYear()
        return `${day}/${month}/${year}`
    }
}
