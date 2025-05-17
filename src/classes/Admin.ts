import AdminModel from "../models/Admin"
import {Time} from "../types"

class Admin {

    static admin:Admin|null = null
    first_name:string
    last_name:string
    username:string
    email:string
    password:string
    open_time:Time
    close_time:Time
    device_ip:string
    isVerified:boolean

    constructor(first_name:string,last_name:string,username:string,email:string,password:string,open_time:Time,close_time:Time,device_ip:string,isVerified:boolean) {
        this.first_name = first_name
        this.last_name = last_name
        this.username = username
        this.email = email
        this.password = password
        this.open_time = open_time
        this.close_time = close_time
        this.device_ip = device_ip
        this.isVerified = isVerified
    }

    static async getAdmin(username:string,device_ip:string) {
        if(Admin.admin == null) {
            Admin.admin = await AdminModel.findOne({username:username,device_ip:device_ip,isVerified:true})
            return Admin.admin
        }
        else if(Admin.admin.username === username && Admin.admin.device_ip == device_ip && Admin.admin.isVerified) {
            return Admin.admin
        } else {
            return null
        }
    }

    static async setAdmin(admin: Admin) {
        Admin.admin = null
        let admins = await AdminModel.find()
        if(admins.length) {
            return null
        } else {
            let admin_ = new AdminModel(admin)
            return await admin_.save()
        }
    }

    static async deleteAdmin(username:string,device_ip:string) {
        Admin.admin = null
        return await AdminModel.deleteOne({username:username,device_ip:device_ip,isVerified:true})
    }

    static async verify(username:string) {
        return await AdminModel.findOneAndUpdate({ username: username }, { isVerified: true },{ new: true })
    }
}

export default Admin