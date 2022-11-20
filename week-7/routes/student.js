const { Router } = require('express');
const studentController = require('../controller/studentController');


const router = require("express").Router();

router.post('/', studentController.addStudent);

router.get('/', studentController.getAllStudents);

router.get('//:id', studentController.getStudent);

router.put('//:id', studentController.updateStudent);

router.delete('//:id', studentController.deleteStudent);



module.exports = router;