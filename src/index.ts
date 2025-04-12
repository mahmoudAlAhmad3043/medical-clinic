import mongoose from './config/db'
import adminRoutes from './routes/adminRoutes'
import { isAdmin,hasAdmin,hashPassword,getAuthToken } from './middleware'
import { env } from './env'
import express from 'express'
const app = express()
const PORT = env.PORT;
mongoose
app.use(express.json())
app.use('/sign-up',[isAdmin,hasAdmin,hashPassword,getAuthToken],adminRoutes.singUpRouter)
app.use('/log-in',adminRoutes.logInRouter)
app.use('/get-admin',adminRoutes.getAdminRouter)


app.listen(PORT,()=> {
    console.log('server running...')
})
