import dotenv from 'dotenv'

dotenv.config()

export const config = {
    api:{
        port: process.env.PORT,
        hostname: process.env.HOSTNAME,
        name: process.env.NAME
    },
    uriMongo:{
        uri: process.env.MONGO_URI,
    }
}