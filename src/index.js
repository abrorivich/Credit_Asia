const express = require("express")
const dotenv = require("dotenv/config")
const connectTOMongoDB = require("./config/mongoDB")
const categoryRoute = require("./routes/categoryRoute")
const registerRoute = require("./routes/registerRoute")
const userRoute = require("./routes/userRoute")
const commoditiesRoute = require("./routes/commoditiesRoute")

const PORT = process.env.PORT || 7070
const app = express()
connectTOMongoDB()

app.use(express.json())
app.use(userRoute)
app.use(registerRoute)
app.use(categoryRoute)
app.use(commoditiesRoute)

app.listen(PORT, console.log(PORT))