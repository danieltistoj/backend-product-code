
export class ProductRouter{
    constructor(router,controller){
        this.router = router()
        this.controller = controller
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
        res.send(await this.controller.createProduct(req.body));
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

    


    
