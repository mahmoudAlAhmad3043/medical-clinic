import Admin from "../classes/Admin";
import mongoose from "../config/db";
import UserModel from "./User";


const AdminSchema = new mongoose.Schema<Admin>({
  open_time:{type:String,required:false},
  close_time:{type:String,required:false}
});

const AdminModel = UserModel.discriminator('Admin', AdminSchema);


export default AdminModel