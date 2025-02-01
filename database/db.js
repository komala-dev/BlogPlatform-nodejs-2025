require('dotenv').config()
const mongoose=require('mongoose');

const connectToDb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('database connected successfully!')
    } catch (error) {
        console.log('something wrong not connect to database!')
    }
}

module.exports=connectToDb