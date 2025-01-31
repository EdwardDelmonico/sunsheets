const mongoose = require('mongoose')

const makerSchema = new mongoose.Schema({
    degree: Number,
    maxLevelObject: Number,
    makerAbilities: Array,
    signatureObject: {
        name: String,
        description: String,
        abilities: Array
    },
    responsibilities: String
})

const Maker = mongoose.model('Maker', makerSchema);
module.exports = Maker