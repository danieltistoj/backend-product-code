import dotenv from 'dotenv'

dotenv.config()

export const config = {
    api:{
        port: process.env.PORT || 4000,
        hostname: process.env.HOSTNAME || "localhost",
        name: process.env.NAME || "App-product"
    },
    uriMongo:{
        uri: process.env.MONGO_URI,
    }
}