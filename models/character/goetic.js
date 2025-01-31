const mongoose = require('mongoose')

const goeticSchema = new mongoose.Schema({
    degree: Number,
    goeticAbilities: Array,
    summoningTypes: Array,
    familiar: Object,
    names: [String],
    pacts: [String],
    responsibilities: String
})

const Goetic = mongoose.model('Goetic', goeticSchema);
module.exports = Goetic