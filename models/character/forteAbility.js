const mongoose = require('mongoose')

const forteAbilitySchema = new mongoose.Schema({
    name: String,
    level: Number,
    description: String,
    color: {
        type: String,
        enum: ['silver', 'green', 'blue', 'indigo', 'grey', 'pale', 'red', 'gold', 'invisible']
    },
    cost: Number,
    facet: String
})

const ForteAbility = mongoose.model('ForteAbility', forteAbilitySchema);
module.exports = ForteAbility