const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: {type: 'string'},
    lastName: {type: 'string'},
}, {timestamp: true});

module.exports.Person = mongoose.model('Person', PersonSchema);