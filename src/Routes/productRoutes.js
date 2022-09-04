import express from "express";
const router = express.Router();
import {
    createProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
} from "../controller/productController.js"

router
    .post("/createProduct",createProduct)
    .get("/getAllProduct",getAllProduct)
    .get("/getOneProduct/:name",getOneProduct)
    .put("/upDateProduct/:name",updateProduct)
    .delete("/deleteProduct/:name",deleteProduct)
    
export default router