import mongoose from 'mongoose'
import config from '@root/config/config'

const mongooseConnection = mongoose.createConnection(config.MONGO_DB_URL)

export default mongooseConnection
