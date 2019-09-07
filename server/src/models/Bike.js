const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Bike = new Schema({
  type: String,
  imgUrl: String,
  hourPrice: Number,
  code: String,
  stationId: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('bike', Bike)
