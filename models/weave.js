const mongoose = require('mongoose');

const weaveSchema = new mongoose.Schema({
    name: String,
    aggregates: Array,
    description: String,
    color: {
        type: String,
        enum: ['silver', 'green', 'blue', 'indigo', 'grey', 'pale', 'red', 'gold', 'invisible']
    }
})

const Weave = mongoose.model('Weave', weaveSchema);
module.exports = Weave