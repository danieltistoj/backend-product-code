import express from "express";
const router = express.Router();
import {
    createProduct,
} from "../controller/productController.js"

router
    .post("/createProduct",createProduct)
    
export default router