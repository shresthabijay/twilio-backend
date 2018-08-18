let express=require("express");

let router=express.Router();

router.get("/",(req,res,next)=>{
    res.send("post sent sms data to database");
})

module.exports=router;