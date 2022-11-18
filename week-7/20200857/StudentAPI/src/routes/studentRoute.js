const express = require('express');
const studentController = require('../controllers/studentController');

const route = express.Router();

route.get('/students/:id', studentController.getStudent);
route.get('/students', studentController.getAllStudents);
route.put('/students/:id', studentController.editStudent);
route.post('/students/create', studentController.addStudent);
route.delete('/students/:id', studentController.deleteStudent);

module.exports = route;
