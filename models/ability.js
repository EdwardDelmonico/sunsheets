const mongoose = require('mongoose');

const abilitySchema = new mongoose.Schema(
    {
        name: String,
        description: String
    }
)

const Ability = mongoose.model('Ability', abilitySchema);
module.exports = Ability;