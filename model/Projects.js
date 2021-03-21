var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projects = new Schema({
    name_project: {
        type: String,
        require: true,
        unique: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    username_navers: {
        type: Array
    }
});

module.exports = mongoose.model('Projects', projects);
