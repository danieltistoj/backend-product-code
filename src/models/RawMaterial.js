import mongoose from "mongoose";
const Schema = mongoose.Schema

const RawMaterialSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    stock:{
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
        type:Number,
        required:true,
    },
    state:{
        type: Boolean,
        default:false,
        required: false
    }
    

},
    {
        timestamps:true,
    }
)

const RawMaterial = mongoose.model('rawMaterial',RawMaterialSchema)
export default RawMaterial