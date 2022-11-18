import studentRouter from './student.route'

const router = (app) => {
    app.use('/students', studentRouter)
}

export default router
