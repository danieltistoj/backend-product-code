import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema
import crypto from "crypto";

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        //select: false,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        undefined:true,
    },
    rol:{
        type:String,
        //required:true,
        default:"retail",
    },
    token:{
        type:String,
        //select:false,
    },
    confirmed:{
        type:Boolean,
        default:true,
    },
},
    {
        timestamps:true,
    }
)
/*
Si se le agrega select a los paramentros al cliente no le va salir al cliente, 
esto puede servir como una medida de seguridad, pero para comprobar por ejemplo la 
contraseña, puede ser un problema, ya que si tiene el select en falso, en el metodo de 
comprobacion no la va a mostrar y esta sera undefined, por lo tanto el hash en bcrypt sera nulo
*/
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
    next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


userSchema.methods.gravatar = function(){
    if(!this.email) return `https://gravatar.com/avatar/?s=2006d=retro`
    
    const md5 =  crypto.createHash('md5').update(this.email).digest('hex') 
    return `https://gravatar.com/avatar/${md5}?=2006d=retro`
}

userSchema.methods.comparePassword = async function(passwordForm) {
    console.log("contra entrante",passwordForm)
    console.log("hash",this.password)
    return await bcrypt.compare(passwordForm, this.password)
}

const User = mongoose.model('user',userSchema)
export default User;

