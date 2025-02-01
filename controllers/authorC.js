const Author=require('../schema/author')

const addAuthor=async (req,res)=>{
    try {
        const data= req.body
        const newAuthor=await Author.create(data);
        if(newAuthor){
            res.status(200).json({
                message:'user added successfully',
                success:true,
                data:newAuthor
            })
        }else{
            res.status(402).json({
                message:'something wrong!',
                success:false
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong please try again!',
            success:false
        })
    }
}

const getAuthor=async(req,res)=>{
    try {
        const allusers=await Author.find({})
        if(allusers){
            res.status(200).json({
                message:'data fetched successfully',
                success:true,
                data:allusers
            })
        }
        else{
            res.status(402).json({
                message:'something wrong!',
                success:false
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong please try again!',
            success:false
        })
    }
}

const getSingleAuthor=async (req,res)=>{
    try {
        const id=req.params.id
        const userwithid=await Author.findById(id)
        if(userwithid){
            res.status(200).json({
                message:'data fetched successfully',
                success:true,
                data:userwithid
            })
        }
        else{
            res.status(402).json({
                message:'something wrong!',
                success:false
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'something went wrong please try again!',
            success:false
        })
    }
}

module.exports={addAuthor,getAuthor,getSingleAuthor}