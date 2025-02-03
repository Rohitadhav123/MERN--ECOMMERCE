import express from 'express';
import { registerController,loginController,testcontroller,forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController } from '../controller/authcontroller.js';
import { isadmin, requiresignin } from '../middlewere/authmiddlewere.js';

const router=express.Router()
//  for reg

router.post('/register',registerController)
// for login
router.post('/login',loginController)
// forgot Password
router.post('/forgot-password',forgotPasswordController)

//practise
router.get('/test',requiresignin,isadmin,testcontroller)

//procteduser  route 
router.get('/user-auth',requiresignin,(req,res)=>{
    res.status(200).send({
        ok:true
    })
})

// admin route
router.get('/admin-auth',requiresignin,isadmin,(req,res)=>{
    res.status(200).send({
        ok:true
    })
})

// update profile

router.put('/profile',requiresignin,updateProfileController)


//order
router.get('/orders',requiresignin,getOrdersController)

//all order
router.get('/all-orders',requiresignin,isadmin,getAllOrdersController)

router.put('/order-status/:orderId',requiresignin,isadmin,orderStatusController)

export default router;