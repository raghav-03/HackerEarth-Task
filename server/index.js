const Express=require("express");
const app=Express();
var cors = require('cors')
const dotenv=require('dotenv')
const cloudinary=require('cloudinary');
const bodyparser=require('body-parser');
const mongoose = require('mongoose');
const path=require('path');
dotenv.config({path:"config/config.env"})
app.use(Express.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())
app.use(require('./router/index.js'));
require('./db/config')

app.listen(process.env.PORT|| 3601,(e)=>{
    if(e){
        console.log("Error");
        return;
    }
    console.log(`Server Running fine on port ${process.env.PORT || 3601}`);
});