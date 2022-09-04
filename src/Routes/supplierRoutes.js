import express from "express"
const router = express.Router()
import {
    createSupplier,
    getAllSuppliers,
} from "../controller/supplierController.js"

router
    .post("/createSupplier",createSupplier)
    .get("/getAllSuppliers",getAllSuppliers)
export default router