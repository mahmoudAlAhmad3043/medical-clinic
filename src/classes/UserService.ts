import AdminModel from "../models/Admin";
import Admin from "./Admin";


class UserService {
    static admin:Admin|null = null

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

    static async setAdmin(admin: Omit<Admin,'_id'>) {
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

    static async verifyChangePassword(username:string,newPassword:string) {
        return await AdminModel.findOneAndUpdate({username:username}, {password: newPassword},{ new: true })
    }
}

export default UserService