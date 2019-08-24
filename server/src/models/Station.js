const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Station = new Schema({
    adress: String,
    langitude: Number,
    latitude: Number
})

module.exports = mongoose.model('station', Station)
