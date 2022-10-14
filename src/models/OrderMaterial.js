import mongoose from "mongoose";
import moment from "moment";
const Schema = mongoose.Schema;

const orderMaterialSchema = new Schema({
    supplier:{
        type: String,
        required: true,
        trim: true,
    },
    user:{
        type: String,
        required: true,
        trim: true,
    },
    date:{
        type: String,
        default: moment().format('DD/MM/YYYY'),   
        required: true,
    },
    totalCost:{
        type: Number,
        default:0,
        required: true,
    },
    materials:{
        type: Array,
        default:[],
        required: true
    }
    
},
{
    timestamps:true,
}
)

const OrderMaterial = mongoose.model('orderMaterial',orderMaterialSchema)
export default OrderMaterial;