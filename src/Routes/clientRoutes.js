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
    .put("/updateClient/:email",updateClient)
    .get("/getAllClient",getAllClient)
    .get("/getOneClient/:id",getOneClient)
    .delete("/deleteClient/:id",deleteClient)

export default router