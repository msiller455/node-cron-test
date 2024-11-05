const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ['daily', 'weekly', 'monthly'],
        expireAt: {
          type: Date,
          default: Date.now() + 35 * 24 * 60 * 60 * 1000
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Log', logSchema);