const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Travel = new Schema({
    stationFromId: String,
    stationToId: String,
    userId: String,
    bikeId: String,
    startAt: Date,
    endAt: Date
})

module.exports = mongoose.model('travel', Travel)