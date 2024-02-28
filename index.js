const express = require("express")
const contactoRouter = require('./src/routes/ContactoRoute')
const cors = require("cors")

const app = express()

require("dotenv").config()

require('./src/config/data/dataBase')

const PORT = process.env.PORT

//middleware
app.use(express.json())

app.use(contactoRouter)

app.use(cors())

app.listen(PORT , ()=>console.log(`conectado a puerto: ${PORT}`))


