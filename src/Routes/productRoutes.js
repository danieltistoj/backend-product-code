
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
                .put("/upDateProduct/:name",this.handleUpDateProduct.bind(this))
                .put("/AddProduct/:id",this.handleAddMaterial.bind(this))
                .put("/deleteMaterial/:id",this.handleDeleteMaterial.bind(this))
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
            const message = await this.controller.update(req.params,req.body)
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

    async handleDeleteMaterial(req,res){
        try {
            const id  = req.params["id"]
            const message = await this.controller.deleteMaterialAllProduct(id,this.materialController)
            this.response.success(req,res,message,this.httpCode.OK)  
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
            
        }
    }
}

    


    
