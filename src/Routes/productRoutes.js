
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
            const message =  await this.controller.createProduct(req.body)
            this.response.success(req,res,message,this.httpCode.CREATED)
        } catch (error) {
            this.response.success(req,res,error,this.httpCode.CREATED)
        }
        
    }
    async handleGetAllProduct(req,res){

    }
    async handleGetOneProduct(req,res){

    }
    async handleUpDateProduct(req,res){

    }
    async handleDeleteProduct(req,res){

    }
}

    


    
