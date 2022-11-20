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
        require: false
    },
    course: {
        type: String,
        require: false
    },
    email: {
        type:String,
    },
    phone: {
        type: String,

    },
    address: {
        type: String
    },
    avatar:{
        data: Buffer,
        type: String

    }


});

module.exports = mongoose.model('student', studentSchema);
