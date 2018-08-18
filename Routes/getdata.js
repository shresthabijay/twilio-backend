let express=require("express");
let database=require("../database.js")

let router=express.Router();

router.get("/",(req,res,next)=>{

    let data={sent:[],recieved:[]}
    
    database.query("SELECT * FROM sentmessages", function (err, result, fields) {
        Object.keys(result).forEach(function(key) {
            var row = result[key]; 
            var d={id:row.id,to:row.sender,from:row.reciever,message:row.message}
            data.sent.push(d)
        });
        res.json(data)
    });
})

module.exports=router
