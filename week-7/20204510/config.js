const dotenv = require('dotenv');
dotenv.config();

const config = {
    port: process.env.PORT || 3300,
    mongoDbUrl: process.env.MONGODB_URL
}
module.exports = config;
