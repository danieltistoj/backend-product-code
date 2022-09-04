import express from "express"
const router = express.Router()
import {
    createSupplier,
    getAllSuppliers,
    getOneSupplier,
    updateSupplier,
    deleteSupplier,
} from "../controller/supplierController.js"

router
    .post("/createSupplier",createSupplier)
    .get("/getAllSuppliers",getAllSuppliers)
    .get("/getOneSupplier/:name",getOneSupplier)
    .put("/updateSupplier/:name",updateSupplier)
    .delete("/deleteSupplier/:name",deleteSupplier)
export default router