const mongoose = require('mongoose');
const Student = require('../models/student.js');
const studentController = {};

studentController.getListStudent = async(req, res )=>{
    try {
        const student = await find({});
        return res.json(student);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

studentController.getStudentByID = async (req, res) =>{
    try {
        const studentID = req.query.studentID.toString();
        const student = await find({studentID});
        return res.json(student);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

studentController.addStudent = async(req, res) =>{
    try {
        const {studentID, email, fullName, className, academicYear, phoneNumber, address, avatar} = req.body;
        const newData = {studentID, email, fullName, className, academicYear, phoneNumber, address, avatar};
        const addStudent = await create([newData])
        if (!addStudent) {
            return res.json({message: 'ERROR'});
        }
        return res.json({message: 'Create new student Success!'});
    } catch (error) {
        res.status(500).json(error);
    }
}

studentController.updateStudentInfor = async(req, res) => {
    try {
        let filter = {};
        const {studentID, email, fullName, className, academicYear, phoneNumber, address, avatar} = req.body;
        if (studentID) filter.studentId = studentID;
        if (email) filter.email = email;
        if (fullName) filter.fullName = fullName;
        if (className) filter.className = className;
        if (academicYear) filter.academicYear = academicYear;
        if (phoneNumber) filter.phoneNumber = phoneNumber;
        if (address) filter.address = address;
        if (avatar) filter.avatar = avatar;

        const updateStudent = await findOneAndUpdate({studentID}, filter);
        if (!updateStudent) {
            return res.json({message: 'Cannot update student infor'});
        }
        return res.json({message: 'Update student infor success!'});
    }
    catch (error) {
        res.status(500).json(error);
    }
}

studentController.deleteStudent = async (req, res) => {
    try {
        const studentID = req.query.studentID.toString()
        console.log({studentID})
        const deletedStudent = await deleteOne({studentID})
        if (!deletedStudent) {
            return res.json({message: 'Cannot delete student'})
        }
        return res.json({message: 'Delete student success!'})
    }
    catch (error) {
        res.status(500).json(error);
    }
}

module.exports = studentController;