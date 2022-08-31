import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    type:{
        type: String,
        required: true,
        trim: true,
    },
    stocks: {
        type:Number,
        default:0,
    },
    state:{
        type:Boolean,
        default:true,
    },
    admission:{
        type: String,
        trim: true,
    }

})