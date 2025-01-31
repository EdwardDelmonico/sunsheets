const apostate = require('mongoose')

const apostateSchema = new mongoose.Schema({
    apostateAbilities: Array,
    counterSpell: Number,
    familiar: Object,
    names: [String],
    pacts: [String],
    responsibilities: String
})

const Apostate = mongoose.model('Apostate', apostateSchema);
module.exports = Apostate