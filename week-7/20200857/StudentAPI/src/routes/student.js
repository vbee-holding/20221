const express = require('express');
const studentController = require('../controllers/student');

const route = express.Router();

route.get('/students/:id', studentController.getStudent);
route.get('/students', studentController.getAllStudents);
route.put('/students/:id', studentController.editStudent);
route.post('/students', studentController.addStudent);
route.delete('/students/:id', studentController.deleteStudent);

module.exports = route;
