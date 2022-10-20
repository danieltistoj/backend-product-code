export class ProductOrderRouter{
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
                .get("/",this.handleTest.bind(this))
                .post("/createProductOrder",this.handleCreateProductOrder.bind(this))
                
                
    }
    async handleTest(req,res){
        try {
            const message =  "Test Product Order"
            this.response.success(req,res,message,this.httpCode.CREATED)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
        
    }
    async handleCreateProductOrder(req,res){
        try {
            const message =  "Create Product Order"
            this.response.success(req,res,message,this.httpCode.CREATED)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
        
    }
}