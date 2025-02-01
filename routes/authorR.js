const Author=require('../schema/author')
const {addAuthor,getAuthor,getSingleAuthor}=require('../controllers/authorC')
const express=require('express')

const router=express.Router()

router.post('/add',addAuthor)
router.get('/get',getAuthor)
router.get('/get/:id',getSingleAuthor)

module.exports=router;