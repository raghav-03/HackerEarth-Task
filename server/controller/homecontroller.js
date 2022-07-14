const Image=require('../models/image')
const Fetures = require("../utlis/features");

exports.home=async (req,res)=>{
    try{
        const perpageitem=9;
        const image=new Fetures(Image.find(),req.query).search();
        let images=await image.query;
        image.pagination(perpageitem)
        images=await image.query.clone();
        res.status(200).json({
            success:true,
            images
        })
    }catch(e){
        res.status(401).json(`Error ${e}`)
    }
}
exports.showoneimg=async (req,res)=>{
    try{
        let image=await Image.findById(req.params.id);
        res.status(200).json({
            success:true,
            image
        })
    }catch(e){
        res.status(401).json(`Error ${e}`)
    }
}
exports.addimg=async (req,res)=>{
    try{
        let newimage=await Image.create(req.body);
        res.status(200).json({
            success:true,
            newimage
        })
    }catch(e){
        res.status(401).json(`Error ${e}`)
    }
}

exports.editimg=async (req,res)=>{
    try{
        
        let image=await Image.findOne({id:req.params.id})
        image.Imgdetails=req.body.Imgdetails;
        image.img_url=req.body.img_url;
        image.save();
        res.status(200).json({
            success:true,
            image
        })
    }catch(e){
        res.status(401).json(`Error ${e}`)
    }
}
exports.deleteimg=async (req,res)=>{
    try{
        await Image.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success:true,
            message:"Image Deleted Successfully"
        })
    }catch(e){
        res.status(401).json(`Error ${e}`)
    }
}