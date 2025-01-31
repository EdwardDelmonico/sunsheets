const mongoose = require('mongoose')

const weaverSchema = new mongoose.Schema({
    degree: Number,
    aggregates: Array,
    aggrepatesPerWeave: Number,
    practicedWeaves: Array,
    enhancedWeaves: Array,
    responsibilities: String
})

const Weaver = mongoose.model('Weaver', weaverSchema);
module.exports = Weaver