const express=require('express')
const {addBlog,getBlogs,getsingleBlog,addComment,getBlogwithauthorname}=require('../controllers/blogC')
const router=express.Router()

router.post('/add',addBlog)
router.get('/get',getBlogs)
router.get('/get/:id',getsingleBlog)
router.post('/add/:blogId/comment',addComment)
router.get('/get/:id/names',getBlogwithauthorname)

module.exports=router
