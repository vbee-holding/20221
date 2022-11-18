const { default: mongoose } = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    fullName: { type: String, required: true },
    age: String,
    mssv: { type: String, required: true },
    class: String,
    course: String,
    email: String,
    mobile: String,
    address: String,
    image: String
});
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
