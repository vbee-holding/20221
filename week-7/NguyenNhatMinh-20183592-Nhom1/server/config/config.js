import dotenv from 'dotenv'
dotenv.config();

const config = {
    PORT: process.env.PORT || 5100,
    MONGO_DB_URL: process.env.MONGO_DB_URL,
    HOST: process.env.HOST || 'localhost'
}
module.exports = config;
