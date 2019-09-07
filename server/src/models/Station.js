const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Station = new Schema({
  name: String,
  address: String,
  langitude: Number,
  latitude: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('station', Station)
