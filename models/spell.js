const mongoose = require('mongoose')

const spellSchema = new mongoose.Schema({
    name: String,
    level: Number,
    description: String,
    color: {
        type: String,
        enum: ['silver', 'green', 'blue', 'indigo', 'grey', 'pale', 'red', 'gold', 'invisible']
    },
    facet: String
})

const Spell = mongoose.model('Spell', spellSchema);
module.exports = Spell