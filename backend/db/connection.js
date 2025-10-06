const mongoose = require("mongoose")
require("dotenv").config()
const user = process.env.DB_USER
const pass = process.env.DB_PASS

async function main() {
    try {
        mongoose.set("strictQuery", true)

        mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.syg6beh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`) 
        console.log("Conectado com o banco de dados")
    } catch (error) {
        console.log(error)
    }
}


module.exports = main