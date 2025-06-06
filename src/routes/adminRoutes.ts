import express from 'express'
import AdminCtrl from '../controllers/AdminCtrl'
import { hashNewPassword } from '../middleware'
const singUpRouter = express.Router()
const logInRouter = express.Router()
const verifyRouter = express.Router()
const deleteRouter = express.Router()
const changePasswordRouter = express.Router()
const verifyChangePasswordRouter = express.Router()

singUpRouter.post('/',(req,res) => AdminCtrl.signUp(req,res))
logInRouter.post('/',(req,res) => AdminCtrl.logIn(req,res))
verifyRouter.get('/:token',(req,res)=>AdminCtrl.verify(req,res))
deleteRouter.get('/',(req,res)=>AdminCtrl.deleteAdmin(req,res))
changePasswordRouter.post('/', (req,res) => AdminCtrl.changePassword(req,res))
verifyChangePasswordRouter.get('/:token', hashNewPassword,(req,res) => {
    AdminCtrl.verifyChangePassword(req,res)
})


export default {singUpRouter, logInRouter ,verifyRouter,deleteRouter, verifyChangePasswordRouter, changePasswordRouter}
