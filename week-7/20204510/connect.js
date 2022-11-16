const mongoose = require('mongoose');
const config = require('./config');
const connectDb = async () => {
    try {
        await mongoose.connect(config.mongoDbUrl);
        console.log('Connect successfully');
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDb;
