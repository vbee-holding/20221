import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import router from '@root/routes/index'
import config from '@root/config/config'

const app = express()
const port = config.PORT
const host = config.HOST

// Enable CORS and body parse
app.use(cors(), express.json(), express.urlencoded({ extended: true }))

router(app)

app.use((error, req, res, next) => {
    console.log(error)
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        message: 'Internal server error',
    })
})

app.listen(port, async () => {
    console.log(`Listening: http://${host}:${port}`)
})
