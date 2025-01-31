const mongoose = require('mongoose')
const suns = require('..assets/lists/suns.js')

const basicItemSchema = new mongoose.Schema({
    name: String,
    level: Number,
    description: String,
    color: {
        type: String,
        enum: suns
    }
})

const BasicItem = mongoose.model('BasicItem', basicItemSchema);
module.exports = BasicItem