const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Travel = new Schema({
  stationFromId: String,
  stationToId: {
    type: String,
    default: null
  },
  userId: String,
  bikeId: String,
  cost: {
    type: Number,
    default: 0
  },
  state: {
    type: Boolean,
    default: true
  },
  startAt: {
    type: Date,
    default: Date.now
  },
  endAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('travel', Travel)
