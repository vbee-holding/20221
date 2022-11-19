const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connectDb() {
    try {
        await mongoose.connect(process.env.mongodb_url);
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect fail!!!');
    }
}

module.exports = { connectDb };
