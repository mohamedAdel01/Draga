const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  username: String,
  phoneNumber: String,
  imgUrl: String,
  password: String,
  wallet: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('user', User)
