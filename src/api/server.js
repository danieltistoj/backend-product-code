import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectMongoDB from "../database/mongodb_connect.js";
import userRoutes from "../Routes/userRoutes.js";

import {productModel} from "../unify/productUnify.js"
import {clientModel} from "../unify/clientUnify.js"
import {rawMaterialModel} from "../unify/rawMaterialUnify.js"

class Server {
  constructor(config) {
    this._app = express();
    this._port = config.port;
    this._hostname = config.hostname;
    this._name = config.name;
    //connectMongoDB()
    this.setMiddleware();
    this.setRoutes();
    connectMongoDB();
  }
  setMiddleware() {
    
    const allowedDomains = [process.env.FRONTEND_URL];
    const corsOptions = {
      origin: function (origin, callback) {
        if (allowedDomains.indexOf(origin) !== -1) {
          //El origen de request esta pemitido
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    };
    
    this._app.use(express.json());
    //this._app.use(cors(corsOptions));
    this._app.use(morgan("dev"));
  }
  setRoutes() {
    this._app.use("/api/v1/user", userRoutes);
    this._app.use("/api/v1/client",clientModel(express.Router));
    this._app.use("/api/v1/product",productModel(express.Router));
    this._app.use("/api/v1/rawMaterialRoutes",rawMaterialModel(express.Router));
   // this._app.use("/api/v1/supplier", supplierRoutes);
  }
  start() {
    this._app.set("hostname", this._hostname);
    this._app.listen(this._port, () => {
      console.log(
        `${this._name} is running en http://${this._hostname}:${this._port}`
      );
    });
  }
}
export default Server;
