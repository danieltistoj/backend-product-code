import express from "express";
const router = express.Router();
import {
    createProduct,
    getAllProduct,
    getOneProduct
} from "../controller/productController.js"

router
    .post("/createProduct",createProduct)
    .get("/getAllProduct",getAllProduct)
    .get("/getOneProduct/:name",getOneProduct)
    
export default router