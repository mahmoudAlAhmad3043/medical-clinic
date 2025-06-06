// import './test111.js'
import mongoose from './config/db'
import adminRoutes from './routes/adminRoutes'
import serviceRoutes from './routes/serviceRoutes'
import { isAdmin,hashPassword,getAuthToken,VerificationCode, isAuth, setClientIP, hashNewPassword } from './middleware'
import { env } from './env'
import express from 'express'
const app = express()
const PORT = env.PORT;
mongoose
app.use(express.json())
app.set('trust proxy', true);
app.use('/sign-up',[isAdmin,hashPassword,setClientIP,VerificationCode],adminRoutes.singUpRouter)
app.use('/log-in',[setClientIP,getAuthToken],adminRoutes.logInRouter)
app.use('/verify',adminRoutes.verifyRouter)
app.use('/remove-admin',[isAuth],adminRoutes.deleteRouter)
app.use('/create-service',[isAuth],serviceRoutes.addRouter)
app.use('/delete-service',[isAuth],serviceRoutes.deleteRouter)
app.use('/update-service',[isAuth],serviceRoutes.updateRouter)
app.use('/change-password', [isAuth],adminRoutes.changePasswordRouter)
app.use('/verify-change-password',adminRoutes.verifyChangePasswordRouter)

app.listen(PORT,()=> {
    console.log('server running...')
})
