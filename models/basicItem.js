const mongoose = require('mongoose')

const basicItemSchema = new mongoose.Schema({
    name: String,
    level: Number,
    description: String,
    color: {
        type: String,
        enum: ['silver', 'green', 'blue', 'indigo', 'grey', 'pale', 'red', 'gold', 'invisible']
    }
})

const BasicItem = mongoose.model('BasicItem', basicItemSchema);
module.exports = BasicItem