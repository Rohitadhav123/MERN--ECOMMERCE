import { compare } from 'bcrypt'
import { comparepassword, hashPassword } from '../helper/authhelper.js'
import usermodel from '../models/usermodel.js'
import jwt from 'jsonwebtoken'
import orderModel from '../models/Order.js'
export const registerController=async(req,res)=>{
    try {
        const {name,email,password,phone,address,answer}=req.body
        if(!name) return res.send({message:"name is require"})
        if(!email) return res.send({message:"email is require"})
        if(!password) return res.send({message:"password is require"})
        if(!phone) return res.send({message:"phone is require"})
        if(!address) return res.send({message:"address is require"})
        if(!answer) return res.send({message:"answer is require"})

        const existuser=await usermodel.findOne({email})

        if(existuser) return res.status(200).send({
            success:false,
            message:"Alredy Register please login"
        })

        const hashedpassword=await hashPassword (password)
        const user= await new usermodel({name,email,phone,address,password:hashedpassword,answer}).save()
        res.status(200).send({
            success:true,
            message:"User Rregister Succesfully",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error in registration",
            error
        })
    }
}


//login
export const loginController=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password) return res.status(404).send({
            success:false,
            message:"Invalid email or password"
        })

        const user=await usermodel.findOne({email})
        if(!user) return res.status(404).send({
            success:false,
            message:"Email is not register"
        })
        const match=await comparepassword(password,user.password)
        if(!match) return res.status(200).send({
            success:false,
            message:"Invalid password"
        })
        const token = await jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
        res.status(200).send({
            success:true,
            message:"Login successfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                role:user.role

            },token
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:true,
            message:"Error in login",
            error
        })
    }
}

 export const forgotPasswordController =async(req,res)=>{
    try {
        const {email,answer,newPassword}=req.body
        if(!email){
            res.status(400).send({message:"Email is reqire"})
        }
        if(!answer){
            res.status(400).send({message:"Answer  is reqire"})
        }
        if(!newPassword){
            res.status(400).send({message:"newpassword is reqire"})
        }

        const user =await usermodel.findOne({email,answer})
        if(!user) return res.status(400).send({
            success:false,
            message:"Wrong email and answer"
        })
        const hashed=await hashPassword(newPassword)
        await usermodel.findByIdAndUpdate(user._id,{password:hashed})
        res.status(200).send({
            success:true,
            message:"Password Reset Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Internal error",
            error
        })
    }
}
export const updateProfileController =async(req,res)=>{
    try {
        const {name,email,password,address,phone}=req.body
        const user=await usermodel.findById(req.user._id)
        //password
        if(password && password.length <6){
            return res.json({
                error:"Password is required and 6 character long"
            })
        }
        const hashedpassword= password ? await hashPassword(password):undefined
        const updateUser=await usermodel.findByIdAndUpdate(req.user._id,{
            name:name || user.name,
            password : hashedpassword|| user.password,
            phone:phone || user.phone,
            address :address || user.address
        },{new:true})
        res.status(200).send({
            success:true,
            message:"Profile Updated Successfully",
            updateUser
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success:false,
            message:"Error in update profile",
            error
        })
    }
}

export const testcontroller=(req,res)=>{
    console.log("protected route")
    res.send("it eotk")
}

//order
export const getOrdersController = async (req, res) => {
    try {
        const orders = await orderModel
        .find({ buyer: req.user._id })
          .populate("products", "-photo")
          .populate("buyer", "name")
          
        res.json(orders);
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error WHile Geting Orders",
          error,
        });
      }
  };


  export const getAllOrdersController = async (req, res) => {
    try {
      const orders = await orderModel
        .find({})
        .populate("products", "-photo")
        .populate("buyer", "name")
        
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error WHile Geting Orders",
        error,
      });
    }
  };




  export const orderStatusController = async (req, res) => {
    try {
      const { orderId } = req.params;
      const { status } = req.body;
      const orders = await orderModel.findByIdAndUpdate(
        orderId,
        { status },
        { new: true }
      );
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error While Updateing Order",
        error,
      });
    }
  };


