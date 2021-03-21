const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const users = new Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Users', users);