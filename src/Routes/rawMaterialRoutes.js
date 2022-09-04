import express from "express";
const router = express.Router();

import {
    createRawMaterial,
} from "../controller/rawMaterialController.js"

router
    .post("/createRawMaterial", createRawMaterial)

export default router