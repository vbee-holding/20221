const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const studentRoute = require('./routes/student');
const app = express();
const db = require('./config/db/connect');
require('dotenv').config();
const port = process.env.PORT;

//connect database
db.connectDb();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.use(studentRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
