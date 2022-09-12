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
        required:false,
        default:0,
    },
    category:{
        type: String,
        required:true,
        trim: true,
    },
    price:{
        type: Number,
        required:true,
        default:0,
    },
    materialCost:{
        type:Number,
        required:true,
        default:0,
    },
    productionCost:{
        type:Number,
        required:true,
        default:0
    },
    description:{
        type: String,
        required:false,
        trim:true,
    },
    state:{
        type:Boolean,
        default:true,
    },
    admission:{
        type: String,
        trim: true,
        required:false,   
    },
    materials:[],

},
    {
        timestamps:true,
    }
)

const Product = mongoose.model('product',productSchema)
export default Product
