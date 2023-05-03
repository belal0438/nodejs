
// console.log("hello world");

const http = require("http");

const server = http.createServer((req, res) => {

    if(req.url == "/"){
        res.end("hellow this is Mohd Belal")
    }else if(req.url == "/home"){
        res.end("Welcome home")
    }else if(req.url == "/about"){
        res.end("Welcome to About Us page")
    }else if(req.url == "/node"){
        res.end("Welcome to my Node Js project")
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("Error-404 : page doesnot fount  ")
    }

});

server.listen(4000,"localhost",()=>{console.log("listen port nmber 4000")})
