import jwt from 'jsonwebtoken'
import usermodel from '../models/usermodel.js'

// protected route

export const requiresignin=async(req,res,next)=>{
   try {
    const decode=jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
    req.user=decode
    next()
   } catch (error) {
    console.log(error)
    res.status(404).send({
        success:false,
        error
    })
   }

}

export const isadmin =async(req,res,next)=>{
    try {
        const user=await usermodel.findById(req.user._id)
        if(user.role !==1) return res.status(404).send({
            success:false,
            message:"Unauthorized Access"
        })
        else{
            next()
        }
    } catch (error) {
        console.log(error)
    }
}