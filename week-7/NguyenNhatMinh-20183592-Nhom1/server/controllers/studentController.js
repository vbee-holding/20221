import Student from "../models/Student";

export const getListStudents = async () => {
    const student = await Student.find({})
    return { student }
}

export const addStudent = async(requestBody) => {
    const {name, studentId, schoolYear, email, phoneNumber, image, address} = requestBody
    const dataCreate = {name, studentId, class: requestBody.class, schoolYear, email, phoneNumber, image, address}
    const addStudent = await Student.create([dataCreate])
    if (!addStudent){
        return {message: 'Add student failed'}
    }
    return { message: 'Add student successfully' }
}

export const getStudentInfo = async (req) =>{
    const studentId = req.query.studentId.toString()
    const student = await Student.findOne({studentId})
    return student
}

export const deleteStudent = async (req) => {
    const studentId = req.query.studentId.toString()
    const student = await Student.deleteOne({studentId})
    if (!student) {
        return { message: 'Delete student failed' }
    }
    return { message: 'Delete student successfully' }
}

export const updateStudent = async (req) => {
    let filter = {}
    const { name, studentId, schoolYear, email, phoneNumber, image, address } = req.body
    const className = req.body.class

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
        return { message: 'Update student info failed' }
    }
    return { message: 'Update student info successfully' }
}