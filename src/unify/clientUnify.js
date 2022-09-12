import { ClientRouter } from "../Routes/clientRoutes.js";
import { ClientController } from "../controller/clientController.js";
import { response } from '../response/response.js'
import { HttpCode } from '../response/httpcode.js'
import client from "../models/Client.js"

export const clientModel = (expressRouter)=>{
    const controller = new ClientController("Client",client)
    const clientRouter = new ClientRouter(expressRouter,controller,response,HttpCode)
    return clientRouter.router
}
