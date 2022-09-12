export class UserRouter{
    constructor(router,controller,response,httpCode){
        this.router = router()
        this.controller = controller
        this.response = response
        this.httpCode = httpCode
        this.routes()
    }
    routes(){
        
        this.router
                .post("/signUp",this.handleSignUp.bind(this))
                .post("/signIn",this.handleSignIn.bind(this))
                .get("/getAllUser/:name",this.handleGetAllUser.bind(this))
                .get("/getOneUser/:name",this.handleGetOneUser.bind(this))
                .delete("/deleteOneUser/:name",this.handleDeleteOneUser.bind(this))
                .put("/updateUser/:name",this.handleUpDateUser.bind(this))
                
    }
    async handleSignUp(req,res){
        try {
            const message =  await this.controller.signUp(req.body)
            this.response.success(req,res,message,this.httpCode.CREATED)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
        
    }
    async handleSignIn(req,res){
        try {
            const message =  await this.controller.signIn(req.body)
            this.response.success(req,res,message,this.httpCode.CREATED)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
    }
    async handleGetAllUser(req,res){
        try {
            const message = await this.controller.getAll()
            this.response.success(req,res,message,this.httpCode.OK)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
            
        }

    }
    async handleGetOneUser(req,res){
        try {
            const message = await this.controller.getOne(req.params)
            this.response.success(req,res,message,this.httpCode.OK)            
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
    }
    async handleDeleteOneUser(req,res){
        try {
            const message = await this.controller.deleteOne(req.params)
            this.response.success(req,res,message,this.httpCode.OK)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
            
        }
    }
    async handleUpDateUser(req,res){
        try {
            const message = await this.controller.update(req.params,req.body)
            this.response.success(req,res,message,this.httpCode.OK)
        } catch (error) {
            this.response.error(req,res,error,this.httpCode.BAD_REQUEST)
        }
    }
}
