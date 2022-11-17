const Student = require('../model/student');

const addStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        const saveStudent = await newStudent.save();
        res.status(200).json(saveStudent);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await Student.findById(studentId);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        const updateFields = req.body;
        await Student.findByIdAndUpdate(studentId, updateFields);
        res.status(200).json('Update successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        await Student.findByIdAndDelete(studentId);
        res.status(200).json('Delete successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports = { addStudent, getAllStudents, getStudent, updateStudent, deleteStudent }
