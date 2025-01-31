const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    current: Number,
    lifetime: Number
})

const Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;