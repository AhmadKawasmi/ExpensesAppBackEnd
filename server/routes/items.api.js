const express = require("express")
const router = express.Router()
const Item = require("../models/item.model")


router.get("/getExpenses", async function(req, res) {
    const items = await Item.find({})
    res.send(items)
})

router.post("/addNewExpenses", async function(req, res) {
    const item = new Item(req.body)
    const response = await item.save()
    res.send(response)
})

router.delete("/deleteExpenses" , function(req,res){
    
})

router.put("/updateExpenses" , function(req,res){
    
})

module.exports = router