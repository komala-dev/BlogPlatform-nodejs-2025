const mongoose=require('mongoose');

const authorSchema=new mongoose.Schema({
    name:String,
    age:Number
},{timestamps:true})

module.exports=mongoose.model('Author',authorSchema)