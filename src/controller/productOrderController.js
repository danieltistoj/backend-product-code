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
            data.stock = product.stocks
            data.total = data.stock 
            data.newStock = data.total - data.sale
            /*
            si no existe una orden relacionada con el producto
            lo que recibe es cero
            */
            data.arrival = 0
            const newData ={
                arrival: data.arrival,
                stock: data.stock,
                total: data.total,
                order: data.order,
                sale: data.sale,
                newStock: data.newStock,
                date: this.createDateFormat(date),
                idProduct: data.idProduct,
            }
            
            return await this.create(newData)
        }else{
            return "no existe la orden"
        }
      
    }
    //obtenemos la fecha en la que se pidio una orden
    orderDate(date,days){
        date.setDate(date.getDate()-days)
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        return date 
    }
    createDateFormat(data){
        const day = data.getDate()
        const month = data.getMonth()
        const year = data.getFullYear()
        return `${day}/${month}/${year}`
    }
}
