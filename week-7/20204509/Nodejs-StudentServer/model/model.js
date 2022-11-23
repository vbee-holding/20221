const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: true
    },
    "mssv": {
        type: String,
        required: true
    },
    "class": {
        type: String,
        required: true
    },
    "course": {
        type: Number,
        required: true
    },
    "email": {
        type: String
    },
    "phone": {
        type: String
    },
    "image": {
        type: String,
        default: "https://upanh.tv/image/BTlHEj"
    },
    "address": {
        type: String
    }
});

let Student = mongoose.model("Student", studentSchema);
module.exports = Student;
