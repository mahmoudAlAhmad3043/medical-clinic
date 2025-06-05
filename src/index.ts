// import './test111.js'
import mongoose from './config/db'
import adminRoutes from './routes/adminRoutes'
import serviceRoutes from './routes/serviceRoutes'
import { isAdmin,hashPassword,getAuthToken,VerificationCode, isAuth, setClientIP } from './middleware'
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

app.listen(PORT,()=> {
    console.log('server running...')
})
/*

sign up route body
{
    "first_name":"mahmoud",
    "last_name": "alahmad",
    "username": "mahmoud23",
    "email":"mahmoudahmad3043@gmail.com",
    "password":"123456",
    "open_time":"12:00:00 PM",
    "close_time":"12:00:00 PM",
    "device_ip":"192.168.87.85"
}

login route body
{
    "username": "mahmoud23",
    "password":"123456",
    "device_ip":"192.168.87.85"
}

*/
