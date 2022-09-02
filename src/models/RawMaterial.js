import { body } from "express-validator";
import mongoose from "mongoose";
const Schema = mongoose.Schema

const RawMaterialSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    stocks:{
        type: Number,
        required:true,
        trim: true,
    },
    category:{
        type: String,
        required:true,
        trim: true,
    },
    cost:{
        type:NaNumber,
        required:true,
    },
    state:{
        type: Boolean,
        default:false,
    }
    

})