const Student = require('../model/student');

// add student
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

const getAStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateStudent = async (req, res) => {
    try {
        // const studentId = req.params.id;
        // const student = await Student.updateOne({ _id: studentId }, { $set: req.body });
        const student = await Student.findById(req.params.id);
        await student.updateOne({ $set: req.body });
        res.status(200).json('Update successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.status(200).json('Delete successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports = { addStudent, getAllStudents, getAStudent, updateStudent, deleteStudent }