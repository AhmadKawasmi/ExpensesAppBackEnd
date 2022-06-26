const mongoose = require("mongoose")

const Schema = mongoose.Schema

const itemSchima = new Schema({
    itemName : String,
    itemPrice : Number,
    itemCategory : String,
})

const Item = mongoose.model("item", itemSchima)

module.exports = Item