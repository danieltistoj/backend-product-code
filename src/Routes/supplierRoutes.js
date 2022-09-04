import express from "express"
const router = express.Router()
import {
    createSupplier 
} from "../controller/supplierController.js"

router
    .post("/createSupplier",createSupplier)

export default router