import Patient from "../classes/Patient";
import mongoose from "../config/db";
import UserModel from "./User";


const PatientSchema = new mongoose.Schema<Patient>({
  age:{type:Number,required:true}
});

const PatientModel = UserModel.discriminator('Patient', PatientSchema);

export default PatientModel