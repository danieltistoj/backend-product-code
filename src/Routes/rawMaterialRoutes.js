export class RawMaterialRouter{
    constructor(router,controller,response,httpCode){
        this.router = router()
        this.controller = controller
        this.response = response
        this.httpCode = httpCode
        this.routes()
    }
    routes(){
        
        this.router
                .post("/createRawMaterial",this.handleCreateRawMaterial.bind(this))
                .get("/getAllRawMaterial",this.handleGetAllRawMaterial.bind(this))
                .get("/getOneRawMaterial/:name",this.handleGetOneRawMaterial.bind(this))
                .put("/upDateRawMaterial/:name",this.handleUpDateRawMaterial.bind(this))
                .delete("/deleteRawMaterial/:name",this.handleDeleteRawMaterial.bind(this))
                
    }
    async handleCreateRawMaterial(req,res){
        try {
            const message =  await this.controller.create(req.body)
            this.response.success(req,res,message,this.httpCode.CREATED)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
        
    }
    async handleGetAllRawMaterial(req,res){
        try {
            const message = await this.controller.getAll()
            this.response.success(req,res,message,this.httpCode.OK)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
            
        }
    }
    async handleGetOneRawMaterial(req,res){
        try {
            const message = await this.controller.getOne(req.params)
            this.response.success(req,res,message,this.httpCode.OK)            
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }

    }
    async handleUpDateRawMaterial(req,res){
        try {
            const message = await this.controller.update(req.params,req.body)
            this.response.success(req,res,message,this.httpCode.OK)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
    }
    async handleDeleteRawMaterial(req,res){
        try {
            const message = await this.controller.deleteOne(req.params)
            this.response.success(req,res,message,this.httpCode.OK)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
            
        }
    }
}

    