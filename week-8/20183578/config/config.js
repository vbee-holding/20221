const dotenv = require('dotenv');
dotenv.config();

const config = {
    PORT: process.env.PORT || 3300,
    MONGODB_URL: process.env.MONGODB_URL
}
module.exports = config;


