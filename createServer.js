const http = require("http");

//for create the server arrow function for incoming request and send the response jb bhi
//browser se request aayegi to ye vala code run hoga
const myServer = http.createServer((req,res)=>{
    console.log(req);//for check where from we get the request include IP address
    console.log('new request recieve');
    res.end("Hello from server");
});

myServer.listen(8000,()=>{
    console.log("server started!");
});