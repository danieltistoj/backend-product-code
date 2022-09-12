
export class ProductRouter{
    constructor(router,controller,response,httpCode){
        this.router = router()
        this.controller = controller
        this.response = response
        this.httpCode = httpCode
        this.routes()
    }
    routes(){
        
        this.router
                .post("/createProduct",this.handleCreateProduct.bind(this))
                .get("/getAllProduct",this.handleGetAllProduct.bind(this))
                .get("/getOneProduct/:name",this.handleGetOneProduct.bind(this))
                .put("/upDateProduct/:name",this.handleUpDateProduct.bind(this))
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
            const message = await this.controller.getOne(req.params)
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
}

    


    
