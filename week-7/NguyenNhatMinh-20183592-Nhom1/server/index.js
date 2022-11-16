import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import restRouter from 'express-rest-routerss'
import 'dotenv/config'

const app = express()

// Enable CORS and body parse
app.use(cors(), express.json(), express.urlencoded({ extended: true }))

app.use(restRouter({ routeDir: '/routes' }))

app.use((error, req, res, next) => {
    console.log(error)
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        message: 'Internal server error',
    })
})

const port = process.env.PORT || 9700
const host = process.env.HOST || 'localhost'

app.listen(port, async () => {
    console.log(`Listening: http://${host}:${port}`)
})
