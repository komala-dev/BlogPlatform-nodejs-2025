const Blog=require('../schema/blog')

const addBlog=async(req,res)=>{
    try {
        const data=req.body
        const newBlog=await Blog.create(data)
        if(newBlog){
            res.status(200).json({
                success:true,
                message:'blog created successfully!',
                data:newBlog
            })
        }else{
            res.status(402).json({
                success:false,
                message:'something went wrong!'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:'something went wrong!'
        })
    }
    

}

const getBlogs=async(req,res)=>{
    try {
        
        const allBlogs=await Blog.find({})
        if(allBlogs){
            res.status(200).json({
                success:true,
                message:'blog created successfully!',
                data:allBlogs
            })
        }else{
            res.status(402).json({
                success:false,
                message:'something went wrong!'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:'something went wrong!'
        })
    }
}

const getsingleBlog=async(req,res)=>{
    try {
        const id=req.params.id
        const Blogbyid=await Blog.findById(id)
        if(Blogbyid){
            res.status(200).json({
                success:true,
                message:'blog created successfully!',
                data:Blogbyid
            })
        }else{
            res.status(402).json({
                success:false,
                message:'something went wrong!'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:'something went wrong!'
        })
    }
}

const addComment=async(req,res)=>{
        try {
            const { blogId } = req.params;
            console.log(blogId)
            const { user, comment } = req.body;
            const blog = await Blog.findById(blogId);
            if (!blog) {
                return res.status(404).json({ error: "Blog post not found!" });
            }
            blog.comments.push({ user, comment });
    
            await blog.save();
            res.status(201).json({ message: "Comment added successfully", blog });
        } catch (error) {
            res.status(500).json({ error: "Error adding comment", details: error.message });
        }
}


const getBlogwithauthorname=async (req,res)=>{
    try {
        const blog= await Blog.findById(req.params.id).populate('author').populate('comments.user');
        if(blog){
            res.status(201).json({ message: "blog with names coming", data:blog });
        }else{
            return res.status(404).json({ error: "Blog post not found!" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error adding comment", details: error.message })
    }
}


module.exports={addBlog,getBlogs,getsingleBlog,addComment,getBlogwithauthorname}