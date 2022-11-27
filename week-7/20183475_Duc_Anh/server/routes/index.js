const express = require('express');
const studentController = require("../controllers/student.js");

const apiRoutes = express.Router();
apiRoutes.get("/getListStudent",studentController.getListStudent);
apiRoutes.get("/findStudentByID/:studentID", studentController.getStudentByID);
apiRoutes.put("/updateStudentInfor/:studentID", studentController.updateStudentInfor);
apiRoutes.delete("/deleteStudent/:studentID",studentController.deleteStudent);

module.exports =  apiRoutes;