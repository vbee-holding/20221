const Student = require("../model/model");

const studentController = {
    //ADD A STUDENT
    addAStudent: async(req, res) => {
        try {
            const newStudent = new Student(req.body);
            const savedStudent = await newStudent.save();
            res.status(200).json(savedStudent);
        } catch(err) {
            res.status(500).json(err.message);
        }
    },

    //GET ALL STUDENTS
    getAllStudents: async(req, res) => {
        try {
            const allStudents = await Student.find();
            res.status(200).json(allStudents);
        } catch(err) {
            res.status(500).json(err.message);
        }
    },

    //GET A STUDENT
    getAStudent: async(req, res) => {
        try {
            const student = await Student.findById(req.params.id);
            res.status(200).json(student);
        } catch(err) {
            res.status(500).json(err.message);
        }
    },

    //UPDATE A STUDENT
    updateAStudent: async (req, res) => {
        try {
            const student = await Student.findById(req.params.id);
            await student.updateOne({$set: req.body});
            res.status(200).json("Updated successfully!");
        } catch(err) {
            res.status(500).json(err.message);
        }
    },

    //DELETE A STUDENT
    deleteAStudent: async (req, res) => {
        try {
           await Student.findByIdAndDelete(req.params.id);
           res.status(200).json("Deleted successfully");
        } catch(err) {
            res.status(500).json(err.message);
        }
    }
};

module.exports = studentController;