import mongoose from './config/db'

import express from 'express'
import adminRoutes from './routes/adminRoutes'
const app = express()
const PORT = process.env.PORT || 3000;
mongoose
app.use(express.json())

app.use('/sign-in',adminRoutes.singInRouter)
app.use('/log-in',adminRoutes.logInRouter)

app.listen(PORT,()=> {
    console.log('server running...')
})


// import User from './classes/user'; 

// const user1 = new User(1, 'John', 'M.', 'Doe', 'password123', 'john@example.com', "Admin");
// user1.setFirstName('Mahmoud'); 

// // استدعاء التابع getFirstName() بشكل صحيح
// console.log(user1.getFirstName()); // Mahmoud

// console.log('dssd');

// // import mongoose from './config/db.js'

// import UserModel from './config/migrations';

//         // Perform migration steps
//         const newUser = new UserModel({
//             name: 'John Doe',
//         });

//         console.log(newUser)
//         newUser.save().then(()=>{
//             console.log('success')
//         })
//         .catch((err)=>{
//             console.log(err)
//         })

