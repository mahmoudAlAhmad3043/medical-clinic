import express from 'express'
import ServiceCtrl from '../controllers/ServiceCtrl'
const addRouter = express.Router()
const updateRouter = express.Router()
const deleteRouter = express.Router()

addRouter.post('/',(req,res) => ServiceCtrl.addService(req,res))
updateRouter.post('/',(req,res) => ServiceCtrl.updateService(req,res))
deleteRouter.get('/:service_id',(req,res) => ServiceCtrl.deleteService(req,res))


export default {addRouter, updateRouter, deleteRouter}
