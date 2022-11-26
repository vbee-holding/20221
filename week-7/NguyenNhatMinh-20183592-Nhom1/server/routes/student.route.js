import express from 'express'
import {
    addStudent, deleteStudent,
    getStudents,
    getStudent, updateStudent
} from '@root/controllers/studentController'

const studentRouter = express.Router()

studentRouter.get('/info', getStudent)
studentRouter.get('/list', getStudents)
studentRouter.post('/', addStudent)
studentRouter.put('/', updateStudent)
studentRouter.delete('/', deleteStudent)


export default studentRouter
