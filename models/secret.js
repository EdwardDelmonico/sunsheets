const mongoose = require('mongoose')
const suns = require('../assets/lists/suns.js')

const secretSchema = new mongoose.Schema({
    name: String,
    level: Number,
    description: String,
    color: {
        type: String,
        enum: suns
    },
    characterSecret: Boolean
})

const Secret = mongoose.model('Secret', secretSchema);
module.exports = Secret