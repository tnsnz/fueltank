const swaggerUi = require("swagger-ui-express")
const swaggerJsdoc = require("swagger-jsdoc")
const {logger} = require("sequelize/lib/utils/logger");

const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            version: "1.0.0",
            title: "Fuel Tank",
            description:
                "Fuel project Restful API",
        },
        servers: [
            {
                url: "http://localhost:3001",
            },
        ],
    },
    apis: ["./src/routes/*.js", "./src/models/*.js"],
}

const specs = swaggerJsdoc(options)

module.exports = {swaggerUi, specs}