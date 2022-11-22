const { model } = require("mongoose");
const studentController = require("../controllers/studentController");

const router = require("express").Router();

//ADD A STUDENT
router.post("/", studentController.addAStudent);

//GET ALL STUDENTS
router.get("/", studentController.getAllStudents);

//GET A STUDENT
router.get("/:_id", studentController.getAStudent);

//UPDATE A STUDENT
router.put("/:_id", studentController.updateAStudent);

//DELETE A STUDENT
router.delete("/:_id", studentController.deleteAStudent);

module.exports = router;