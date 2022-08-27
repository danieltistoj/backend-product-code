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
        select:false,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        undefined:true,
    },
    token:{
        type:String,
        select:false,
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
userSchema.pre('save', async (next)=>{
    let user = this
    if(!user.isModified('password')) return next()
    
    await bcrypt.genSalt(10,(err,salt)=>{
        if (err) return next(err)

        bcrypt.hash(user.password,salt,null,(err,hash)=>{
            if(err) return next(err)
            user.password = hash
            next()
        })
    })
})
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
    return await bcrypt.compare(passwordForm,this.password)
}

const User = mongoose.model('user',userSchema)
export default User;

