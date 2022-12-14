export class UserRouter{
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
                .post("/signUp",this.middleware.verifyToken,this.handleSignUp.bind(this))
                .post("/signIn",this.handleSignIn.bind(this))
                .get("/getAllUser/:name",this.handleGetAllUser.bind(this))
                .get("/getOneUser/:id",this.handleGetOneUser.bind(this))
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
           // console.log(req.params)
            const idUser = {
                _id:req.params.id
            }
            console.log(idUser)
            const message = await this.controller.getOne(idUser)
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
