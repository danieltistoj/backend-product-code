import express from "express";
const router = express.Router();

import {
    createRawMaterial,
    getAllRawMaterial,
    getOneRawMaterial,
    updateRawMaterial,
    deleteRawMaterial,
} from "../controller/rawMaterialController.js"

router
    .post("/createRawMaterial", createRawMaterial)
    .get("/getAllRawMaterial",getAllRawMaterial)
    .get("/getOneRawMaterial/:name",getOneRawMaterial)
    .put("/upDateRawMaterial/:name",updateRawMaterial)
    .delete("/deleteRawMaterial/:name",deleteRawMaterial)

export default router