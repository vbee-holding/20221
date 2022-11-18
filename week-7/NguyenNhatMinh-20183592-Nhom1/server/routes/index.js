import studentRouter from './student.route'

const router = (app) => {
    app.use('/student', studentRouter)
}

export default router
