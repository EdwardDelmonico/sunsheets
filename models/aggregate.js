const mongoose = require('mongoose');

const aggregateSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        qualities: Array,
        absences: Array
    }
)

const Aggregate = mongoose.model('Aggregate', aggregateSchema);
module.exports = Aggregate;