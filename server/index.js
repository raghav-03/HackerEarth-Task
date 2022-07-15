const Express=require("express");
const app=Express();
var cors = require('cors')
const dotenv=require('dotenv')
const cloudinary=require('cloudinary');
const bodyparser=require('body-parser');
const mongoose = require('mongoose');

// const fileupload=require('express-fileupload')
const path=require('path');
dotenv.config({path:"config/config.env"})
app.use(Express.json());
app.use(bodyparser.urlencoded({extended:true}))
// app.use(fileupload());
app.use(cors())
app.use(require('./router/index.js'));
require('./db/config')
// app.use(Express.static(path.join(__dirname,"../client/build")))
// app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"../client/build/index.html"))
// })
app.listen(process.env.Port,(e)=>{
    if(e){
        console.log("Error");
        return;
    }
    console.log(`Server Running fine on port ${process.env.Port}`);
});