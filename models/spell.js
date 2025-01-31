const mongoose = require('mongoose')
const suns = require('../assets/lists/suns')

const spellSchema = new mongoose.Schema({
    name: String,
    level: Number,
    description: String,
    color: {
        type: String,
        enum: suns
    },
    facet: String
})

const Spell = mongoose.model('Spell', spellSchema);
module.exports = Spell