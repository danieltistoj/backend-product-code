import express from "express";
const router = express.Router();
import {
    createProduct,
    getAllProduct
} from "../controller/productController.js"

router
    .post("/createProduct",createProduct)
    .get("/getAllProduct",getAllProduct)
    
export default router