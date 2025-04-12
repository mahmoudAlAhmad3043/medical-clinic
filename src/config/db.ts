import mongoose from 'mongoose'
import { env } from './../env'
mongoose.connect(env.MONGO_URI)
.then(()=>{
    console.log('database connected')
})
.catch((err)=>{
    console.log(err)
})

export default mongoose;