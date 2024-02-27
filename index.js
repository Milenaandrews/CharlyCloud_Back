const express = require("express")
const contactoRouter = require('./src/routes/ContactoRoute')


const app = express()

require("dotenv").config()

require('./config/dataBase')

const PORT = process.env.PORT

//middleware
app.use(express.json())

app.use(contactoRouter)

app.listen(PORT , ()=>console.log(`conectado a puerto: ${PORT}`))


