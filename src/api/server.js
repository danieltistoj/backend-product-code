import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import connectMongoDB from '../database/mongodb_connect.js'
import userRoutes from '../Routes/userRoutes.js'

class Server{
    constructor(config){
        this._app = express();
        this._port = config.port
        this._hostname = config.hostname
        this._name = config.name
        //connectMongoDB()
        this.setMiddleware()
        this.setRoutes()
        connectMongoDB()
    }
    setMiddleware(){
        this._app.use(express.json());
        this._app.use(cors())
        this._app.use(morgan('dev'))
    }
    setRoutes(){
    this._app.use('/api/v1/user',userRoutes)
    }
    start(){
        this._app.set('hostname',this._hostname)
        this._app.listen(this._port,()=>{
            console.log(`${this._name} is running en http://${this._hostname}:${this._port}`)
        })
    }
}
export default Server