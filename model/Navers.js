const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const navers = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 255
    },
    fullname: {
        type: String,
        required: true,
        max: 255
    },
    birth_date: {
        type: Date,
        default: null
    },
    admission_date: {
        type: Date,
        default: null
    },
    job_role: {
        type: String,
        default: null,
        max: 255
    },
    created_at: {
        type: Date,
        default: Date.now
    }
    
});


module.exports = mongoose.model('Navers', navers);

