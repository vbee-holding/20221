import mongoose from 'mongoose'
import db from '@root/config/mongodb'

const Student = new mongoose.Schema({
    name: { type: String, required: true },
    studentId: { type: String, required: true },
    class: { type: String, required: true },
    schoolYear: { type: Number, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    image: { type: String, required: true },
    address: { type: String, required: true }
})

export default db.model('Student', Student, 'student')
