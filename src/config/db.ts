import mongoose from 'mongoose'
import { env } from './../env'
import { Speaker } from '../classes/Speaker'
mongoose.connect(env.MONGO_URI)
.then(async ()=>{
    console.log('database connected')
    Speaker.enqueue('database connected')
})
.catch((err)=>{
    console.log(err)
})

export default mongoose;