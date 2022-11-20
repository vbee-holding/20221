const mongoose = require('mongoose');
const config = require('./config/config');

async function connectDb() {
    try {
        await mongoose.connect(config.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect fail!!!');
    }
}
module.exports = { connectDb };




