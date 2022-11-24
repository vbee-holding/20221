var express = require('express');
var router = express.Router();
const db = require('./config/connectDatabase');

//connect database
db.connectDb();
let userSchema= mongoose.Schema({
  name:{type:String,},
  MSSV:{type:Number,},
  class:{type:String,},
  course:{type:String,},
  email:{type:String,},
  image: {
    url: {type:String},
    imgname: {type:String}},   
  adress:{type:String,}
})

let students = mongoose.model('students', userSchema);
/* GET home page. */
router.get('/', function(req, res) {
  students.find({},(erorr, data)=>{//data:tat ca du lieu trong lop nay
    //console.log('danh sach  lop', data);
    res.render('index', {students: data});//gui ve file index.ejs 1 lops
  });
  //res.render('index', { title: 'test server' });
});
//form-add
router.get('/form-add', function(req,res,next){
  res.render('form-add',{});
})

router.post('/add',function(req,res,next){//ben file form-add de POST
  students.create(req.body);
  res.redirect('/');
});

//form update
router.get('/form-update/:id', function(req,res,next){
  collections.findById(req.params.id, (erorr, data)=>{
    res.render('form-update',{collections: data});
  }
  );
});

router.post('/update',function(req,res,next){//ben file form-update de POST
  collections.findByIdAndUpdate(req.body.id, req.body, (erorr, data)=>{
    res.redirect('/');
  });
  
});

//form delete
router.get('/form-delete/:id', function(req,res,next){
  collections.findByIdAndDelete(req.params.id, (erorr, data)=>{
    res.redirect('/');
  }
  );
});

module.exports = router;

