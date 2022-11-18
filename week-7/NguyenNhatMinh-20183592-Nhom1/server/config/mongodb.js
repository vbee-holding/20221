import mongoose from 'mongoose'
import config from '@root/config/config'


mongoose.connect(config.MONGO_DB_URL).catch((error) => {
    console.log(error)
    process.exit(1)
})
const mongooseConnection = mongoose.connection

export default mongooseConnection
