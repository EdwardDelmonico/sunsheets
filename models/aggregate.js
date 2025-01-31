const mongoose = require('mongoose');

const aggregateSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        qualities: Array,
        absences: Array,
        nightside: Boolean
    }
)

const Aggregate = mongoose.model('Aggregate', aggregateSchema);
module.exports = Aggregate;