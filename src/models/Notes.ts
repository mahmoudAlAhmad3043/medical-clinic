import Notes from "../classes/Notes";
import mongoose from "../config/db";


const NotesSchema = new mongoose.Schema<Notes>({
    patient_id:{type:mongoose.Schema.Types.ObjectId, ref:'patients'},
    description:String
})


const NotesModel = mongoose.model<Notes>('notes',NotesSchema);


export default NotesModel