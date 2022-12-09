const mongoose = require("mongoose");

// mongoose.Promise = global.Promise;
const studentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    mssv: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    class: {
        type: String,
        require: false,
        default:''
    },
    course: {
        type: String,
        require: false,
        default:''
    },
    email: {
        type:String,
        require: true
    },
    phone: {
        type: String,
        require: false,
        default: ''

    },
    address: {
        type: String,
        require: false,
        default: ''
    },
    avatar:{
        type: String,
        require: false
    }


});

module.exports = mongoose.model('student', studentSchema);