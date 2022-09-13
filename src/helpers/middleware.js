import { response } from '../response/response.js'
import { HttpCode } from '../response/httpcode.js'
import jwt from 'jsonwebtoken'


export const middleware = {
    verifyToken: function (req,res,next) {
    const token = req.headers['x-access-token'];
    if(!token){
        const error = new Error("No token provided");
        response.error(req,res,error,HttpCode.BAD_REQUEST)
    }
    const decoded =jwt.verify(token,process.env.JWT_SECRET)
    req.userId = decoded.id
    next()
}
}