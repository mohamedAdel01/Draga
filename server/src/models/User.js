const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  username:  {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber:  {
    type: Number,
    required: true,
    unique: true,
    min: 10,
    max: 10
  },
  imgUrl: String,
  password:  {
    type: String,
    required: true
  },
  wallet: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('user', User)
