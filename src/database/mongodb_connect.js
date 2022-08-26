import mongoose from "mongoose";

const connectMongoDB = async () =>{
    try{
        //console.log("uri",process.env.MONGO_URI)
        const connection = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            retryWrites: true,
            w: "majority",
        })
        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(`Mongo connected in: ${url}`)
    }catch(error){
        console.log(`error: ${error.message}`)
        process.exit(1)
    }
}

export default connectMongoDB