const mongoose = require('mongoose')
const {Schema} = mongoose;

const vehicleSchema = new Schema({
    id: Number,
    vehicleId: Number,
    type: String,
    ownerName: String,
    location:String,
    nearLocation: [String],
    number: String,
});

module.exports = mongoose.model('number-kodu' ,vehicleSchema )