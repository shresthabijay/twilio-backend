let sql=require("mysql")

let database=sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database:"twiliodb"
})

database.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("database connection succesful");
    }

});





module.exports=database