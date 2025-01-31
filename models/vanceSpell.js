const mongoose = require('mongoose')

const vanceSpellSchema = new mongoose.Schema({
    name: String,
    level: Number,
    description: String,
    color: {
        type: String,
        enum: ['silver', 'green', 'blue', 'indigo', 'grey', 'pale', 'red', 'gold', 'invisible']
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

