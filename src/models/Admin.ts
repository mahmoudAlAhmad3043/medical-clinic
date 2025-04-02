import Admin from "../classes/Admin";
import mongoose from "../config/db";
import {Time} from '../types'

const AdminSchema = new mongoose.Schema<Admin>({
    first_name:String,
    last_name:String,
    email:String,
    password:String,
    open_time:String,
    close_time:String
})

const AdminModel = mongoose.model<Admin>('admin',AdminSchema);


export default AdminModel



