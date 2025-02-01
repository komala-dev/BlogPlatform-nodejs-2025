const mongoose=require('mongoose')
const User=require('./user')
const Author=require('./author')

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        uppercase:true
    },
    content:{
        type:String,
        lowercase:true
    },
    tags:{
        type:[String],
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author', 
        required: true
    },
    comments:[
        {
            user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true },
            comment:{type:String,required:true},
            createdAt:{type:Date,default:Date.now}
        }
    ]
},{timestamps:true})

module.exports=mongoose.model('Blog',blogSchema);