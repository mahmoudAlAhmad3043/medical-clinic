import mongoose from './db'

interface User  {
    name:String
}

const UserSchema = new mongoose.Schema<User>({
    name: String
})

const UserModel = mongoose.model<User>('user', UserSchema)

export default UserModel