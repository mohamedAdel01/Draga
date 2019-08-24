const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Bike = new Schema({
    type: String,
    imgUrl: String,
    hourPrice: Number,
    barcode: Number,
    stationId: String
})

module.exports = mongoose.model('bike', Bike)