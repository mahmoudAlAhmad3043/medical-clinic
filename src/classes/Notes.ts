import mongoose from "mongoose"

class Notes {
    patient_id:mongoose.Types.ObjectId
    description:string

    constructor(patient_id:mongoose.Types.ObjectId,description:string){
        this.patient_id = patient_id
        this.description = description
    }
}

export default Notes