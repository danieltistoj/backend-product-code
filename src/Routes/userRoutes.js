import express from 'express';
const router = express.Router();
import {
    signUp,
    login,
    getAllUser,
    getOneUser,
} from "../controller/userController.js"

router
    .post("/signUp",signUp)
    .post("/login",login)
    .get("/getAllUser",getAllUser)
    .post("/getOneUser",getOneUser)

export default router


