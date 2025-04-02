import express from 'express'
import AdminCtrl from '../controllers/AdminCtrl'
const singInRouter = express.Router()
const logInRouter = express.Router()

singInRouter.post('/',(req,res) => AdminCtrl.signIn(req,res))
logInRouter.post('/',(req,res) => AdminCtrl.logIn(req,res))

export default {singInRouter, logInRouter}
