const mongoose = require('mongoose');
const suns = require('../assets/lists/suns')

const weaveSchema = new mongoose.Schema({
    name: String,
    aggregates: Array,
    description: String,
    color: {
        type: String,
        enum: suns
    }
})

const Weave = mongoose.model('Weave', weaveSchema);
module.exports = Weave