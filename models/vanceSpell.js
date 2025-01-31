const mongoose = require('mongoose')
const suns = require('../assets/lists/suns')

const vanceSpellSchema = new mongoose.Schema({
    name: String,
    level: Number,
    description: String,
    color: {
        type: String,
        enum: suns
    },
    class: {
        type: String,
        enum: ['alpha', 'beta', 'gamma', 'omega']
    },
    size: {
        height: Number,
        width: Number
    }
})

const VanceSpell = mongoose.model('VanceSpell', vanceSpellSchema);
module.exports = VanceSpell

