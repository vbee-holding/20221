const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    mssv: {
        type: String,
        require: true,
    },
    class: {
        type: String
    },
    schoolYear: {
        type: Number
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    image: {
        type: String
    }
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;