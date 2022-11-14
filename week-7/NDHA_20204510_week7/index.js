const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const connectdb = require('./connect');
const port = process.env.PORT || 3300;
const studentRoute = require('./route/studentRoute');

dotenv.config();
const app = express();

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// kết nối tới db
connectdb();

app.use(studentRoute, (req, res, next) => {
    next();
})