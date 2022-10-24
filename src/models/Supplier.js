//proveedor 
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    name:{
        type: String,
        require: true,
        trim: true,
    },
    country:{
        type: String,
        require: false,
        trim: true,
    },
    direction:{
        type: String,
        require: false,
        trim: true,
    },
    description:{
        type:String,
        require: true,
        trim: true,
    },
    email:{
        type:String,
        require: false,
        trim: true
    },
    phone:{
        type:String,
        require: false,
        trim:true
    }

},
{
    timestamps:true,
}
)

const Supplier = mongoose.model('supplier',supplierSchema)
export default Supplier
