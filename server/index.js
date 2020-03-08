const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const router = require("./routers/router.js")
const app = express()

process.env.DB = "mongodb+srv://lucasarvid:7948153@glitch-8v7d2.mongodb.net/test?retryWrites=true&w=majority"
process.env.PORT = 8080

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')

    next()
})

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }); 

app.get("/", (req, res) => {
    res.send("express-api reached")
})

app.use("/api", router)

app.listen(process.env.PORT, () => {
    console.log("App listening on port:" + process.env.PORT)
})