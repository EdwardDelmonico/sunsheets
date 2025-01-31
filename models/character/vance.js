const mongoose = require('mongoose')

const vanceSchema = new mongoose.Schema({
    degree: Number,
    vanceSpells: Array,
    mind: {
        height: Number,
        width: Number,
    },
    responsibilities: String
})

const Vance = mongoose.model('Vance', vanceSchema);
module.exports = Vance