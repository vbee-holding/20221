const express = require('express');
const connectDb = require('./connect');
const config = require('./config');
const studentRoute = require('./route/studentRoute');
const app = express();

app.listen(config.port, () => {
    console.log(`Server is running on port: ${config.port}`);
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDb();

app.use(studentRoute);
