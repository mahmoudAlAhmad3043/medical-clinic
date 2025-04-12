import jwt from 'jsonwebtoken'
import Admin from "../classes/Admin";
import mongoose from "../config/db";
import {env} from '../env'
import {Time} from '../types'

const AdminSchema = new mongoose.Schema<Admin>({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    username: {type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    open_time:{type:String,required:false},
    close_time:{type:String,required:false},
    device_ip:{type:String,required:true},
    isVerified: { type: Boolean, default: false }
})

const AdminModel = mongoose.model<Admin>('admin',AdminSchema);

export async function signUp(admin: Admin) :Promise<Admin>{
    let admin_ = new AdminModel(admin)
    return await admin_.save()
}

export async function getAdmin() :Promise<Admin[]>{
    await AdminModel.deleteMany()
    return await AdminModel.find()  
}

export async function verify(username:string) :Promise<any> {
    return await AdminModel.findOneAndUpdate({ username: username }, { isVerified: true },{ new: true })
}





