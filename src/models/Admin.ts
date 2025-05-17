import Admin from "../classes/Admin";
import mongoose from "../config/db";

const AdminSchema = new mongoose.Schema<Admin>({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    username: {type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    open_time:{type:String,required:false},
    close_time:{type:String,required:false},
    device_ip:{type:String,required:true,unique:true},
    isVerified: { type: Boolean, default: false }
})

const AdminModel = mongoose.model<Admin>('admin',AdminSchema);

export default AdminModel




