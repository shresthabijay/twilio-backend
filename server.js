let http=require("http");
let app=require("./app");
const port=8000;

let server=http.createServer(app)

server.listen(port,()=>{
    console.log("server started at port "+port)
})