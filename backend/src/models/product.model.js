const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  owner: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    name:{
        type: String,
    },
    price:{
        type: Number
    },
    quantity: {
        type: Number
    }
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product