export class ProductOrderRouter{
    constructor(router,controller,response,httpCode,middleware,productController){
        this.router = router()
        this.controller = controller
        this.response = response
        this.httpCode = httpCode
        this.middleware = middleware
        this.productController = productController
        this.routes()
    }
    routes(){
        
        this.router
                .get("/",this.handleTest.bind(this))
                .get("/specificOrders/:id",this.handleGetSpecificOrders.bind(this))
                .post("/createProductOrder",this.handleCreateProductOrder.bind(this))
                .put("/updateProductOrder",this.handleUpdateProductOrder.bind(this))
                
                
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
            const date = new Date()
            console.log(date)
            const message = await this.controller.createProductOrder(req.body,date,this.productController)
            this.response.success(req,res,message,this.httpCode.CREATED)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
        
    }
    async handleGetSpecificOrders(req,res){
        try {
            const message = await this.controller.getSpecificOrder(req.params["id"])
            this.response.success(req,res,message,this.httpCode.CREATED)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
        
    }
    async handleUpdateProductOrder(req,res){
        try {
            const message = "update product order"
            //const message = await this.controller.createProductOrder(req.body,date,this.productController)
            //const message = await this.controller.create(req.body)
            this.response.success(req,res,message,this.httpCode.CREATED)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
        
    }
}