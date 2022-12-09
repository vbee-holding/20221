const experess = require("express");
const mongoose = require("mongoose");
const studentModel = require("../models/student");
const multer = require("multer");
const studentController = require("../controllers/student");
// const file = require("fs")

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null,Date.now() +  file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// const upload = multer({storage: storage});
const upload = multer({dest:storage});

const apiRoutes = experess.Router();
apiRoutes.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});
apiRoutes.post("/postStudent",upload.single('avatar'),studentController.addStudent);
apiRoutes.get("/getAllStudent",studentController.getAllStudent);
apiRoutes.get("/findStudentByMssv/:mssv", studentController.getStudent);
apiRoutes.get("/findStudentByName/:name", studentController.getStudent);
apiRoutes.get("/findStudent/:id", studentController.getStudent);
apiRoutes.post("/updateStudentId/:id", studentController.updateStudent);
apiRoutes.delete("/deleteStudentId/:id",studentController.deleteStudent);
apiRoutes.post('/upImage',upload.single('image'), (req, res, next) => {
    console.log(req.file);
    const student = new studentModel({
        _id: mongoose.Types.ObjectId(),
        mssv: req.body.mssv,
        name: req.body.name,
        avatar: req.file.path,
        class: req.body.class,
        course: req.body.course,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.email,

    });
    return student
        .save()
        .then(newStudent =>{
            return res.status(201).json({
                success:true,
                message:"New student created succesfully.",
                data: newStudent
            });
        })
        .catch(error =>{
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Server error, try again.",
                error: error.message
            });
        }); 
    
});
module.exports =  apiRoutes;
