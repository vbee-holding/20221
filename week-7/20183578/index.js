const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const studentRoute = require('./routes/student');
const app = express();
const config = require('./config/config');
const db = require('./config/connectDatabase');

//connect database
db.connectDb();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.use(studentRoute);

app.listen(config.PORT, () => {
    console.log(`Example app listening on port ${config.PORT}`);
});

