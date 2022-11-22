const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    "Name": {
        type: String,
        required: true
    },
    "MSSV": {
        type: String,
        required: true
    },
    "Class": {
        type: String,
        required: true
    },
    "Course": {
        type: Number,
        required: true
    },
    "Email": {
        type: String
    },
    "Phone": {
        type: String
    },
    "Image": {
        type: String,
        default: "https://upanh.tv/image/BTlHEj"
    },
    "Address": {
        type: String
    }
});

let Student = mongoose.model("Student", studentSchema);
module.exports = Student;