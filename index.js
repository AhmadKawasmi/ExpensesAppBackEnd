const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const itemApi = require('./server/routes/items.api')

const App = express()
const PORT = 8080

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("connected to dataBase"))


App.use(express.json())
App.use("/Expenses", itemApi)

App.listen(PORT, function(){
    console.log("up and running on port " + PORT);
})