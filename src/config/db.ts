import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/medical_clinic_db')
.then(()=>{
    console.log('database connected')
})
.catch((err)=>{
    console.log(err)
})

export default mongoose;