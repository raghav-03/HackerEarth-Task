const Express=require("express");
const app=Express();
const dotenv=require('dotenv')
const bodyparser=require('body-parser');
const cors=require('cors');
const path = require("path");

dotenv.config({path:"config/config.env"})
app.use(Express.json());
var cookieParser = require('cookie-parser')
app.use(cookieParser());
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors());
app.use(require('./router/index.js'));
const mongoose = require('mongoose');
const { urlencoded } = require("express");
require('./db/config')

app.use(Express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});


app.listen(process.env.PORT || 3601,(e)=>{
    if(e){
        console.log("Error");
        return;
    }
    console.log(`Server Running fine on port ${process.env.PORT || 3601}`);
});

// const Express=require("express");
// const app=Express();
// var cors = require('cors')
// const dotenv=require('dotenv')
// const cloudinary=require('cloudinary');
// const bodyparser=require('body-parser');
// const mongoose = require('mongoose');
// const path=require('path');
// dotenv.config({path:"config/config.env"})
// app.use(Express.json());
// app.use(bodyparser.urlencoded({extended:true}))
// app.use(cors())
// app.use(require('./router/index.js'));
// require('./db/config')

// app.listen(process.env.PORT|| 3601,(e)=>{
//     if(e){
//         console.log("Error");
//         return;
//     }
//     console.log(`Server Running fine on port ${process.env.PORT || 3601}`);
// });