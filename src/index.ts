import mongoose from './config/db'
import adminRoutes from './routes/adminRoutes'
import { isAdmin,hasAdmin,hashPassword,getAuthToken,sendVerificationEmail } from './middleware'
import { env } from './env'
import express from 'express'
const app = express()
const PORT = env.PORT;
mongoose
app.use(express.json())
app.use('/sign-up',[isAdmin,hasAdmin,hashPassword,sendVerificationEmail],adminRoutes.singUpRouter)
app.use('/log-in',adminRoutes.logInRouter)
app.use('/get-admin',adminRoutes.getAdminRouter)
app.use('/verify',adminRoutes.verifyRouter)


app.listen(PORT,()=> {
    console.log('server running...')
})
