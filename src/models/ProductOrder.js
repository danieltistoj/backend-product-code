import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productOrderSchema = new Schema({
    arrival: { //recibe 
        type: Number,
        required: true,
        default:0
    },
    stock:{ 
        type: Number,
        required: true,
        default: 0
    },
    total: {
        type: Number,
        required:false,
        default:0,
    },
    order:{//pedido
        type: Number,
        required:true,
        default:0
    },
    sale:{//venta
        type: Number,
        required: true,
        default:0
    },
    newStock:{
        type: Number,
        required: true,
        default:0
    },
    date:{
        type: Date,
        required:true,
        default:"",
    },
    idProduct:{
        type:String,
        required:true,
        default:""
    },
},
    {
        timestamps:true,
    }
)

const ProductOrder = mongoose.model('ProductOrder',productOrderSchema)
export default ProductOrder
