import express from 'express'
import { isadmin, requiresignin } from '../middlewere/authmiddlewere.js';
import { categoryController, createCategoryController, deletecategoryController, singleCategory, updateCategoryController } from '../controller/CategoryController.js';

const router=express.Router();
// create category
router.post('/create-category',requiresignin,isadmin,createCategoryController)

// update category
router.put('/update-category/:id',requiresignin,isadmin,updateCategoryController)

// get all category
router.get('/get-category',categoryController)
// single category
router.get('/single-category/:slug',singleCategory)
// delte cat
router.delete('/delete-category/:id',requiresignin,isadmin,deletecategoryController)


export default router