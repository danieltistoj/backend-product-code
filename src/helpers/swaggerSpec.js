import { config } from "../config/default.js";
import path from "path";

    export const swagger = {
    swaggerSpec: {
        swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Product Code API Documentation",
            version: "1.0.0",
        },
        servers: [
            {
            url: `http://${config.api.hostname}:${config.api.port}`,
            },
            {
            url: "https://servidor-operaciones.herokuapp.com",
            },
        ],
        },
        apis: [ "../unify/*.js"],
    },
    };
