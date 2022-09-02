import mongoose from "mongoose";
const clientSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    direction:{
        type: String,
        required:false,
        trim: trim,

    },
    email:{
        type:String,
        required:true,
        trim: true,
    },
    phone:{
        type:String,
        required:true,
        trim: true,
    }
})