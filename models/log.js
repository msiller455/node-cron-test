const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ['daily', 'weekly', 'monthly'],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Log', logSchema);