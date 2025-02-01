require('dotenv').config()
const express=require('express')
const connectToDb=require('./database/db')
const server=express();
const userRouter=require('./routes/userR')
const authorRouter=require('./routes/authorR')
const blogRouter=require('./routes/blogR')
connectToDb()

server.use(express.json())
server.use('/user',userRouter)
server.use('/author',authorRouter)
server.use('/blog',blogRouter)
server.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`)
})