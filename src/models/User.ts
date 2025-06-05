import User from "../classes/User";
import mongoose from "../config/db";

const options = { discriminatorKey: 'role', collection: 'users' };

const UserSchema = new mongoose.Schema<User>({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    username: {type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    phone:{type:String,required:false},
    device_ip:{type:String,required:true,unique:true},
    isVerified: { type: Boolean, default: false }
},options)

const UserModel = mongoose.model<User>('User',UserSchema);

export default UserModel




