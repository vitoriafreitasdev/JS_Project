const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

const conection = require("./db/connection")
conection()

const routes = require("./routes/mainRouter")
app.use("/", routes)

app.listen(3000, function(){
    console.log("Servidor online")
})

