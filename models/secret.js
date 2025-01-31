const mongoose = require('mongoose')

const secretSchema = new mongoose.Schema({
    name: String,
    level: Number,
    description: String,
    color: {
        type: String,
        enum: ['silver', 'green', 'blue', 'indigo', 'grey', 'pale', 'red', 'gold', 'invisible']
    },
    characterSecret: Boolean
})

const Secret = mongoose.model('Secret', secretSchema);
module.exports = Secret