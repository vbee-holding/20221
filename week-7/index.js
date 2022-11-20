const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const studentRoute = require("./routes/student");


dotenv.config();


//connect database

mongoose.connect(
    process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    () => {
      console.log("mongdb is connected");
    }
  );
  
app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

//Route

app.use("/v1/student", studentRoute);

app.listen(8000,() => {
    console.log("Server is running...");
});