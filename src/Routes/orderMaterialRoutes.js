export class OrderMaterialRouter{
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
                .post("/createOrderMaterial",this.handleCreateOrderMaterial.bind(this)) 
                .get("/getAllOrderMaterial",this.handleGetAllOrderMaterial.bind(this))
    }
    async handleCreateOrderMaterial(req,res){
        try {
            const message = await this.controller.createOrderMaterial(req.body)
            this.response.success(req,res,message,this.httpCode.CREATED)
            //this.response.success(req,res,message,this.httpCode.CREATED)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
        
    }
    async handleGetAllOrderMaterial(req,res){
        try {
            const message = await this.controller.getAll()
            this.response.success(req,res,message,this.httpCode.CREATED)
            //this.response.success(req,res,message,this.httpCode.CREATED)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
        
    }
    
}

    