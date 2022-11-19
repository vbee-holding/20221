const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const studentRoute = require('./routes/stRoute');
const app = express();
const port = 3000;
const db = require('./config/connectData');

//connect database
db.connectDb();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.use(studentRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}
);


