const express = require('express');
const studentController = require('../controller/studentController');

const route = express.Router();

route.post('/students', studentController.addStudent);

route.get('/students', studentController.getAllStudents);

route.get('/students/:id', studentController.getStudent);

route.put('/students/:id', studentController.updateStudent);

route.delete('/students/:id', studentController.deleteStudent);

module.exports = route;
