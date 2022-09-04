import Server from './server.js'
import {config} from '../config/default.js'

function main(config) {
    const server = new Server(config) //instanciar 
    server.start() //iniciar el servidor 
}

main(config.api)