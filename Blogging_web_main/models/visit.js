const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
    visits: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Visit', visitSchema);