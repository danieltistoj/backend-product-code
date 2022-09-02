//proveedor 
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    name:{
        type: String,
        require: true,
        trim: true,
    },
    direction:{
        type: true,
        require: false,
        trim: true,
    },
    description:{
        type: true,
        require: true,
        trim: true,
    }

})
