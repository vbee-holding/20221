const mongoose = require("mongoose");
const multer = require("multer");
const studentModel = require("../models/student");
const studentController ={};
studentController.addStudent = async(req, res, next) =>{
    console.log(req.file);
    const files = req.file;
   let avatar;
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
    try{
       let newStudent =  await student.save()
        return res.status(201).json({
            success:true,
            message:"New student created succesfully.",
            data: newStudent
        }); 
    }catch(error){
        console.log(error);
            res.status(500).json({
                success: false,
                message: "Server error, try again.",
                error: error.message
            });
    }
}
studentController.getAllStudent = async(req, res, next) =>{
        try{
            let result = await studentModel.find() 
                            . select("_id mssv name class course email phone address avatar");
            return  res.status(200).json(result);

        }catch(error){
            res.status(500).json({
                success: false,
                message: "Can't Save. Try Again.",
                error: error.message  
            });
        }
}
studentController.getStudent = async(req, res, next) =>{
    const id = req.params.id;
    try{
        let result = await studentModel.find({_id: id})
        if(result == []){
            return res.status(500).json({
                success:false,
                message:"Not found student"
            });
        }
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({
            success: false,
            message:"This student dose not exits",
            error: error.message
        });
    }
}
studentController.updateStudent = async(req, res, next) =>{
    const idStudent = req.params.id;
    const updates = req.body;
    try{
        let result = await studentModel.findByIdAndUpdate(idStudent,updates ,{new: true});
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
    }catch(error){
        res.status(500).json({
            success: false,
            message:"Can't update",
            error: error.message
        });
    }
}
studentController.deleteStudent = async(req, res, next) =>{
    const id = req.params.id;
    try{
        let result = await studentModel.findByIdAndDelete({ _id: id })
        .exec();
        if(result){
            res.status(200).json({
                message: 'Student deleted',
            });
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
          error: error
        });
    }
}
module.exports = studentController;
