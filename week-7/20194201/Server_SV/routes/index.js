const experess = require("express");
const multer = require("multer");
const studentController = require("../controllers/student");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null,Date.now() +  file.originalname);
  }
});

// const fileFilter = (req, file, cb) => {
//   // reject a file
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

const upload = multer({storage: storage});


const apiRoutes = experess.Router();
apiRoutes.post("/postStudent",upload.single('image'),studentController.addStudent);
apiRoutes.get("/getAllStudent",studentController.getAllStudent);
apiRoutes.get("/findStudentByMssv/:mssv", studentController.getStudent);
apiRoutes.get("/findStudentByName/:name", studentController.getStudent);
apiRoutes.put("/updateStudentId/:id", studentController.updateStudent);
apiRoutes.delete("/deleteStudentId/:id",studentController.deleteStudent);
module.exports =  apiRoutes;