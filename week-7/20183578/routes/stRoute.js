const express = require('express');
const studentController = require('../controllers/stController');

const route = express.Router();

route.get('/collections/:id', studentController.getStudent);
route.get('/collections', studentController.getAllStudents);
route.put('/collections/:id', studentController.editStudent);
route.post('/collections/create', studentController.addStudent);
route.delete('/collections/:id', studentController.deleteStudent);

module.exports = route;

