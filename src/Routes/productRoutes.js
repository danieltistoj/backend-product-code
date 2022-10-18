
export class ProductRouter{
    constructor(router,controller,response,httpCode,middleware,materialController){
        this.router = router()
        this.controller = controller
        this.response = response
        this.httpCode = httpCode
        this.middleware = middleware
        this.materialController = materialController
        this.routes()
    }
    routes(){
        
        this.router
                .post("/createProduct",this.middleware.verifyToken,this.handleCreateProduct.bind(this))
                .get("/getAllProduct",this.handleGetAllProduct.bind(this))
                .get("/getOneProduct/:id",this.handleGetOneProduct.bind(this))
                .put("/upDateProduct/:id",this.handleUpDateProduct.bind(this))
                .put("/AddMaterial/:id",this.handleAddMaterial.bind(this))
                .put("/deleteMaterial/:id",this.handleDeleteMaterial.bind(this))
                .put("/updateAmountMaterial/:id",this.handleUpdateAmountMaterial.bind(this))
                .put("/updateCostMaterial/:id",this.handleUpdateCostMaterial.bind(this))
                .delete("/deleteProduct/:name",this.handleDeleteProduct.bind(this))
                
    }
    async handleCreateProduct (req,res){
        try {
            const message =  await this.controller.create(req.body)
            this.response.success(req,res,message,this.httpCode.CREATED)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
        
    }
    async handleGetAllProduct(req,res){
        try {
            const message = await this.controller.getAll()
            this.response.success(req,res,message,this.httpCode.OK)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
            
        }
    }
    async handleGetOneProduct(req,res){
        try {
            const data = {
                _id: req.params["id"]
            }
            const message = await this.controller.getOne(data)
            this.response.success(req,res,message,this.httpCode.OK)            
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }

    }
    async handleUpDateProduct(req,res){
        try {
            const data = {
                _id: req.params["id"]
            }
            const message = await this.controller.update(data,req.body)
            this.response.success(req,res,message,this.httpCode.OK)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
    }
    async handleDeleteProduct(req,res){
        try {
            const message = await this.controller.deleteOne(req.params)
            this.response.success(req,res,message,this.httpCode.OK)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
            
        }
    }
    //se agrega un material a la lista de materiales de producto
    async handleAddMaterial(req,res){
        try {
            const data = {
                _id: req.params["id"]
            }
            const message = await this.controller.addMaterial(req.body,data,this.materialController)
            console.log(message)
            this.response.success(req,res,message,this.httpCode.OK)  
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
            
        }
    }
    /*actualiza la lista de materiales si se elimina un material en general
        elimina el material de todos los productos que este y  actualiza los 
        costos totales 
    */
    async handleDeleteMaterial(req,res){
        try {
            const id  = req.params["id"]//id del material 
            const message = await this.controller.deleteMaterialAllProduct(id,this.materialController)
            this.response.success(req,res,message,this.httpCode.OK)  
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
            
        }
    }
    //actualiza el costo total de materiales por si se cambia la cantidad de un material
    async handleUpdateAmountMaterial(req,res){
        try {
            const filter = {
            _id:req.params["id"]//id del producto
            }
            const message = await this.controller.updateAmountMaterial(filter,req.body,this.materialController)
            this.response.success(req,res,message,this.httpCode.OK)  
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
            
        }
    }
    /*es para actualizar los costos de materiales, si un material cambia de costo, lo modifica en todos 
      los productos donde este 
    */
    async handleUpdateCostMaterial(req,res){
        try {
            const id_material = req.params["id"]
           
            const message = await this.controller.updateCostMaterial(id_material,this.materialController)
            this.response.success(req,res,message,this.httpCode.OK)  
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
            
        }
    }
}

    


    
