const Student = require('../model/studentModel');

const studentController = {
    //addstudent
    addStudent: async (req, res) => {
        try {
            const newStudent = new Student(req.body);
            const saveStudent = await newStudent.save();
            res.status(200).json(saveStudent);
        } catch (error) {
            res.status(500).json(error);
        }
    //getAllStudent
    getAllStudents = async (req, res) => {
        try {
            const students = await Student.find();
            res.json(students)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    //getStudent
    getStudent = async (req, res) => {
        try {
            const studentId = req.params.id;
            const student = await Student.findById(studentId);
            res.status(200).json(student);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    //updateStudent
    updateStudent = async (req, res) => {
        try {
            const studentId = req.params.id;
            const updateFields = req.body;
            await Student.findByIdAndUpdate(studentId, updateFields);
            res.status(200).json('Update successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    }
    //deleteStudent
    deleteStudent = async (req, res) => {
        try {
            const studentId = req.params.id;
            await Student.findByIdAndDelete(studentId);
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    }
    },
};
module.exports = studentController; 