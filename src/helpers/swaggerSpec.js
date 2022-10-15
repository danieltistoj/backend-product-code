
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"
import { config } from "../config/default.js"

const options = {
    definition:{
    openapi:"3.0.0",
    info:{title:"Documentacion de la API",version:"1.0.0"},
    servers: [
        {
        url: `http://${config.api.hostname}:${config.api.port}`,
        description: "Servidor local"
        },
        {
        url: "https://servidor-operaciones.herokuapp.com",
        description: "Servidor en produccion"
        },
    ]
    },
    
    apis:["src/unify/*.js"]
}

const swaggerSpec = swaggerJSDoc(options)

export const swaggerJSDocs = (app,port)=>{
    app.use("/api/v1/docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))
    app.use("api/v1/docs.json",(req,res)=>{
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })

}