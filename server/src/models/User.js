const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    phoneNumber: String,
    imgUrl: String,
    password: String,
    wallet: Number
})

module.exports = mongoose.model('user', User)