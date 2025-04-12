import express from 'express'
import AdminCtrl from '../controllers/AdminCtrl'
const singUpRouter = express.Router()
const logInRouter = express.Router()
const getAdminRouter = express.Router()

singUpRouter.post('/',(req,res) => AdminCtrl.signUp(req,res))
logInRouter.post('/',(req,res) => AdminCtrl.logIn(req,res))
getAdminRouter.get('/',(req,res) => AdminCtrl.getAdmin(req,res))


export default {singUpRouter, logInRouter , getAdminRouter}
