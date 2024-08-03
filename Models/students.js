const mongoose = require('mongoose');
const studentschema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        age: {type: Number, required: true},
        grade: {type: String, required: true},
    }
);

module.exports = mongoose.model('student', studentschema);