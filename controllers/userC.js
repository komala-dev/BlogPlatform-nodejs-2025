const User=require('../schema/user')

const addUser=async (req,res)=>{
    try {
        const data= req.body
        const newUser=await User.create(data);
        if(newUser){
            res.status(200).json({
                message:'user added successfully',
                success:true,
                data:newUser
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

const getUser=async(req,res)=>{
    try {
        const allusers=await User.find({})
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

const getSingleUser=async (req,res)=>{
    try {
        const id=req.params.id
        const userwithid=await User.findById(id)
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

module.exports={addUser,getUser,getSingleUser}