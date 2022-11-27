const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../db.js');

var studentSchema = new Schema({
    studentID: {
        type: Number, 
        required: true, 
        unique: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true 
    },
    fullName: { 
        type: String, 
        required: true 
    },
    className:  { 
        type: String, 
        required: true,
    },
	academicYear: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: String,
        unique: true,
    },
    address: {
        type: String,
    },
    avatar: {
        contentType: String,
        data: Buffer, 
    },
})

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;