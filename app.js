const express=require("express");
const morgan=require("morgan");
const cors=require("cors")
const bodyparser=require("body-parser");
let GetRouter=require("./Routes/getdata.js");
let PostRouter=require("./Routes/postdata.js");
let twilioRouter=require("./Routes/sendSMS.js")
let database=require("./database");

let app=express();

app.use(cors())
app.use(morgan());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res,next)=>{
    res.send("<button>hello</button>");
})

app.use("/getdata",GetRouter)
app.use("/sendSMS",twilioRouter)

module.exports=app;