
// set up express//setup mongodb// setup .env //body-parse
const express = require('express');
const { response, request } = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
// const logger = require("morgan");
require("dotenv/config");
//setup routes
const mainRoutes = require("./routes/index");
let statusDB;
//set up dependecies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(logger("dev"));
// set up mongo
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('Database connected');
    statusDB = "Database connected";
  })
  .catch((error)=> {
    console.log('Error connecting to database');
    statusDB = "Error connecting to database";
  });

const PORT = process.env.PORT || 8000; // setup port number

//set up api
app.use("/api", mainRoutes);

app.get('/',(req,res)=>{
    res.status(200).json({
        message: `Welcome to Server_SV, ${statusDB}`,    
          
    });

});

app.listen(PORT,(req, res)=>{
    console.log(`Server is live on ${PORT}`);
});
