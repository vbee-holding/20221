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
    class: String,
    schoolYear: Number,
    email: String,
    phone: String,
    address: String,
    image: String
})
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
