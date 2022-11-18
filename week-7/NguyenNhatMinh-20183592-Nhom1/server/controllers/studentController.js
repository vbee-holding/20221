import Student from "../models/Student";

export const getStudents = async (req, res) => {
    try {
        const student = await Student.find({})
        return res.json(student)
    }
    catch (error) {
        res.status(500).json(error);
    }
}

export const addStudent = async(req, res) => {
    try {
        const dataCreate = req.body
        const addStudent = await Student.create(dataCreate)
        if (!addStudent) {
            return res.json({message: 'Add student failed'})
        }
        return res.json({message: 'Add student successfully'})
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getStudent = async (req, res) =>{
    try {
        const studentId = req.query.studentId.toString()
        const student = await Student.findOne({studentId})
        return res.json(student)
    }
    catch (error) {
        res.status(500).json(error);
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const studentId = req.query.studentId.toString()
        const student = await Student.deleteOne({studentId})
        if (!student) {
            return res.json({message: 'Delete student failed'})
        }
        return res.json({message: 'Delete student successfully'})
    }
    catch (error) {
        res.status(500).json(error);
    }
}

export const updateStudent = async (req, res) => {
    try {
        let filter = {}
        const {name, studentId, class: className ,schoolYear, email, phoneNumber, image, address} = req.body

        if (name) filter.name = name
        if (studentId) filter.studentId = studentId
        if (schoolYear) filter.schoolYear = schoolYear
        if (email) filter.email = email
        if (className) filter.class = className
        if (phoneNumber) filter.phoneNumber = phoneNumber
        if (image) filter.image = image
        if (address) filter.address = address

        const updateStudent = await Student.findOneAndUpdate({studentId}, filter)

        if (!updateStudent) {
            return res.json({message: 'Update student info failed'})
        }
        return res.json({message: 'Update student info successfully'})
    }
    catch (error) {
        res.status(500).json(error);
    }
}
