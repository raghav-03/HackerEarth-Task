var mongoose=require("mongoose");

const imgSchema=new mongoose.Schema({
    imgName:{
        type:String,
        required:true
    },
    Imgdetails:{
        type:String,
        required:true
    },
    img_url:{
        type:String,
        required:true
    }
},{ timestamps: true });

const Images=mongoose.model('Image',imgSchema);

module.exports=Images;