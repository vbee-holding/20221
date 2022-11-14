const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectdb = async () => {
    const mongoDB_url = process.env.MONGODB_URL;
    try {
        await mongoose.connect(mongoDB_url);
        console.log('Connect successfully');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectdb;