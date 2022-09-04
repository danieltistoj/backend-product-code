import express from "express"
const router = express.Router()
import {
    createSupplier,
    getAllSuppliers,
    getOneSupplier,
    updateSupplier,
} from "../controller/supplierController.js"

router
    .post("/createSupplier",createSupplier)
    .get("/getAllSuppliers",getAllSuppliers)
    .get("/getOneSupplier/:name",getOneSupplier)
    .put("/updateSupplier/:name",updateSupplier)
export default router