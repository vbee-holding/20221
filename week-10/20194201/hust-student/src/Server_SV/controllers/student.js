const mongoose = require("mongoose");
const multer = require("multer");
const studentModel = require("../models/student");
const studentController ={};

studentController.addStudent = (req, res,next) =>{
    console.log(req.file);
    const files = req.file;
    if(!files){
        avatar = req.body.avatar
    }else{
        avatar = req.file.path
    }
    const student = new studentModel({
        _id: mongoose.Types.ObjectId(),
        mssv: req.body.mssv,
        name: req.body.name,
        class: req.body.class,
        course: req.body.course,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        avatar: avatar
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

}
studentController.getAllStudent = async(req,res, next) =>{
    studentModel.find()
        . select("_id mssv name class course email phone address avatar")
        .then(result =>{
            
            return  res.status(200).json(result);
        })
        .catch(error =>{
            res.status(500).json({
                success: false,
                message: "Can't Save. Try Again.",
                error: error.message
                
            });
        })
}
studentController.getStudent = async(req, res, next) =>{
    const mssv = req.params.mssv;
    const name = req.params.name;
    const id = req.params.id
    studentModel.find({
        $or:[
            {_id: id},
            {mssv: mssv},
            {name: name},
            
        ]
    })
       .then(result =>{
        if(result == []){
            return res.status(500).json({
                success:false,
                message:"Not found student"
            });
        }

        res.status(200).json(result);
       })
       .catch(error =>{
        res.status(500).json({
            success: false,
            message:"This student dose not exits",
            error: error.message
        });
       })
}
studentController.updateStudent = async(req, res, next) =>{
    const idStudent = req.params.id;
    const updates = req.body;

    // if(req.body.mssv == null  || req.body.name == null) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }
    studentModel.findByIdAndUpdate(idStudent,updates 
        ,{new: true})
       .then(result =>{
        if(!result){
            return res.status(500).json({
                success:false,
                message:"Not found with id"
            });
        }
        res.status(200).json({
            success: true,
            message: "Update successfully",
            data: result
        });
       })
       .catch(error =>{
        res.status(500).json({
            success: false,
            message:"Can't update",
            error: error.message
        });
       })

}
studentController.deleteStudent = async(req, res, next) =>{
    
    const id = req.params.id;
    studentModel.deleteOne({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json({
            message: 'Student deleted',
            
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  
  }
module.exports = studentController;