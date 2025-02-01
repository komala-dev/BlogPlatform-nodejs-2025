const User=require('../schema/user')
const {addUser,getUser,getSingleUser}=require('../controllers/userC')
const express=require('express')

const router=express.Router()

router.post('/add',addUser)
router.get('/get',getUser)
router.get('/get/:id',getSingleUser)

module.exports=router;

