const mongoose = require('mongoose');

async function connectDb() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Student_API', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect fail!!!');
    }
}

module.exports = { connectDb };
