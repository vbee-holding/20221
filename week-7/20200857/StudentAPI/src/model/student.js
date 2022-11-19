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
    image: {
        type: String,
        default: 'https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong-600x600.jpg'
    }
});
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
