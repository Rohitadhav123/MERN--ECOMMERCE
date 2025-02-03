import slugify from "slugify"
import categoryModel from "../models/categoryModel.js"


export const createCategoryController =async(req,res)=>{
    try {
        const {name}=req.body
        if(!name) return res.status(401).send({
            message:"Name is require"
        })
        const existingCategory=await categoryModel.findOne({name})
        if(existingCategory) return res.status(200).send({
            success:true,
            message:"Category alredy existes"
        })
        const category=await new categoryModel({name,slug:slugify(name)}).save()
        res.status(200).send({
            success:true,
            message:"New category Created",
            category
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in category",
            error
        })
    }
}

export const updateCategoryController =async(req,res)=>{
    try {
        const {name}=req.body
        const {id}=req.params
        const category=await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        res.status(200).send({
            success:true,
            message:"Category update successfully"
        })
    } catch (error) {
        console.log(error),
        res.status(500).send({
            success:false,
            message:"Error in updating",
            error
        })
    }
}
// get all cat
export const categoryController =async(req,res)=>{
try {
    const category =await categoryModel.find({})
    res.status(200).send({
        success:true,
        message:"All categories list",
        category
    })
} catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:"Error in category controller",
        error
    })
}
}

//single cat

export const singleCategory=async (req,res) => {
    try {
        
        const category=await categoryModel.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            message:"Get single category success",
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Erorr in single cat"
        })
    }
}

//delete cat
export const deletecategoryController =async (req,res)=>{
    try {
        const {id}=req.params
        await categoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:'successfully deleted'
            
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in delete category",
            error
        })
    }
}
