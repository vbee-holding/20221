import express from 'express'
import {
    addStudent, deleteStudent,
    getListStudents,
    getStudentInfo, updateStudent
} from '@root/controllers/studentController'

const studentRouter = express.Router()

studentRouter.get('/get-info', getStudentInfo)
studentRouter.get('/get-líst', getListStudents)
studentRouter.post('/add', addStudent)
studentRouter.put('/update', updateStudent)
studentRouter.delete('/delete', deleteStudent)


export default studentRouter
