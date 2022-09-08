import express from "express"
const router = express.Router()
import {
    createClient,
    updateClient,
    getAllClient,
    getOneClient,
    deleteClient,
} from "../controller/clientController.js"

router
    .post("/createClient",createClient)
    .put("/updateClient/:name",updateClient)
    .get("/getAllClient",getAllClient)
    .get("/getOneClient/:name",getOneClient)
    .delete("/deleteClient/:name",deleteClient)

export default router