let express=require("express");
let twilio=require("twilio")
let database=require("../database.js")


let router=express.Router();

router.post("/",(req,res,next)=>{
    var to_no=req.body.to
    var from_no=req.body.from
    var accountSID=req.body.accountSID
    var token=req.body.token
    var message=req.body.message

    try{
        var client=new twilio(accountSID,token);
    }
    catch(err){
        res.send("invalid token or account SID")
        return
    }
    
    client.messages.create({
        body: message,
        to: to_no,  // Text this number
        from: from_no // From a valid Twilio number
    })
    .then((message) =>{

        var sql = `INSERT INTO sentmessages (sender, reciever, message ) VALUES ("${req.body.from}","${req.body.from}","${req.body.message}")`;

        database.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });

        res.send("sent succesful")

    }).catch((err)=>{
        res.status(400).send(err)
    });
})

module.exports=router