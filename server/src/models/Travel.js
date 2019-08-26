const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Travel = new Schema({
  stationFromId: String,
  stationToId: String,
  userId: String,
  bikeId: String,
  startAt: {
    type: Date,
    default: Date.now
  },
  endAt: Date,
  cost: Number
})

module.exports = mongoose.model('travel', Travel)
