export class SupplierRouter{
    constructor(router,controller,response,httpCode,middleware){
        this.router = router()
        this.controller = controller
        this.response = response
        this.httpCode = httpCode
        this.middleware = middleware
        this.routes()
    }
    routes(){
        
        this.router
                .post("/createSupplier",this.middleware.verifyToken,this.handleCreateSupplier.bind(this))
                .get("/getAllSuppliers",this.handleGetAllSupplier.bind(this))
                .get("/getOneSupplier/:name",this.handleGetOneSupplier.bind(this))
                .put("/updateSupplier/:name",this.handleUpDateSupplier.bind(this))
                .delete("/deleteSupplier/:name",this.handleDeleteSupplier.bind(this))
                
    }
    async handleCreateSupplier(req,res){
        try {
            const message =  await this.controller.create(req.body)
            this.response.success(req,res,message,this.httpCode.CREATED)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
        
    }
    async handleGetAllSupplier(req,res){
        try {
            const message = await this.controller.getAll()
            this.response.success(req,res,message,this.httpCode.OK)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
            
        }
    }
    async handleGetOneSupplier(req,res){
        try {
            const message = await this.controller.getOne(req.params)
            this.response.success(req,res,message,this.httpCode.OK)            
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }

    }
    async handleUpDateSupplier(req,res){
        try {
            const message = await this.controller.update(req.params,req.body)
            this.response.success(req,res,message,this.httpCode.OK)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
    }
    async handleDeleteSupplier(req,res){
        try {
            const message = await this.controller.deleteOne(req.params)
            this.response.success(req,res,message,this.httpCode.OK)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
            
        }
    }
}

    