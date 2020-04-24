const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    location: String,
    description: String,
    priority: Boolean,
    first: String,
    last: String
});

module.exports = mongoose.model('Task', taskSchema);