import Patient from "../classes/Patient";
import mongoose from "../config/db";


const PatientSchema = new mongoose.Schema<Patient>({
    patient_id: Number,
    first_name: String,
    last_name: String,
    phone: String,
    email: String,
    age: Number
})

const PatientModel = mongoose.model<Patient>('patients',PatientSchema)

export default PatientModel