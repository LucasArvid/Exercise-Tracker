const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const router = require("./routers/router.js")
const app = express()

process.env.DB = "mongodb+srv://lucasarvid:7948153@glitch-8v7d2.mongodb.net/test?retryWrites=true&w=majority"
process.env.PORT = 8080

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }); 

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.use("/api", router)

app.listen(process.env.PORT, () => {
    console.log("App listening on port:" + process.env.PORT)
})