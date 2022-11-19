const { default: mongoose } = require('mongoose');
const Schema = mongoose.Schema;

const stSchema = new Schema({
    name: { type: String, required: true },
    MSSV: { type: String, required: true },
    class: String,
    course: String,
    email: String,
    phonenumber: String,
    image: {url: String,imagename: String},
    address: String
}
);
const Student = mongoose.model('collections', stSchema);

module.exports = Student;
//a






