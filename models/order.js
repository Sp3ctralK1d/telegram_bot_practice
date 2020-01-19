const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    user: String,
    date: Date,
    themes: String,
    status: String
})

const Order = mongoose.model(orederSchema)
module.exports = Order