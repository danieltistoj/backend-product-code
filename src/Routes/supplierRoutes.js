import express from "express"
const router = express.Router()
import {
    createSupplier,
    getAllSuppliers,
    getOneSupplier,
} from "../controller/supplierController.js"

router
    .post("/createSupplier",createSupplier)
    .get("/getAllSuppliers",getAllSuppliers)
    .get("/getOneSupplier/:name",getOneSupplier)
export default router