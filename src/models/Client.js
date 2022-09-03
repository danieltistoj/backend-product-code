import mongoose from "mongoose";
const Schema = mongoose.Schema
const clientSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    direction:{
        type: String,
        required:false,
        trim: true,

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
    },
    nit:{
        type:String,
        required:false,
        trim: true,
    }
},
{
    timestamps:true,
}
)


const Client = mongoose.model('client',clientSchema)
export default Client;