const mongoose = require('mongoose');

const apostateAbilitySchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        available: Boolean
    }
)

const ApostateAbility = mongoose.model('ApostateAbility', apostateAbilitySchema);
module.exports = ApostateAbility;