const express = require('express');
const studentController = require('../controller/studentController');

const route = express.Router();

route.post('/', studentController.addStudent);

route.get('/', studentController.getAllStudents);

route.get('/:id', studentController.getAStudent);

route.put('/:id', studentController.updateStudent);

route.delete('/:id', studentController.deleteStudent);

module.exports = route;
