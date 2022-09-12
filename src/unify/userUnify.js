import { UserRouter } from "../Routes/userRoutes.js"
import {UserController} from "../controller/userController.js"
import { response } from '../response/response.js'
import { HttpCode } from '../response/httpcode.js'
import user from "../models/User.js"

export const userModel = (expressRouter)=>{
    const controller = new UserController("User",user)
    const userRouter = new UserRouter(expressRouter,controller,response,HttpCode)
    return userRouter.router
}