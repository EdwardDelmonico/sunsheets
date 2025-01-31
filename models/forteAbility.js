const mongoose = require('mongoose')
const suns = require('../assets/lists/suns')

const forteAbilitySchema = new mongoose.Schema({
    name: String,
    level: Number,
    description: String,
    color: {
        type: String,
        enum: suns
    },
    cost: Number,
    facet: String
})

const ForteAbility = mongoose.model('ForteAbility', forteAbilitySchema);
module.exports = ForteAbility