// require http module 
const http = require("http");

//rrquire file  system module 
const fs = require('fs');

//rrequire path module 
const path = require('path')


// create server node core method for handling requests and response
http.createServer((req,res)=> {

    if (req.url === "/" || req.url === "/index.html"){
        //we are reading the file the in our index
        fs.readFile("./public/index.html","utf-8", (err,html) =>{

        // setting paramenters to  ehad to mkae sure they match index.html
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(html);
    });}
// else
    else if (req.url === "/index2.html")
    {
        //we are reading the file the in our index
        fs.readFile("./public/index2.html","utf-8", (err,html) =>{
            // setting paramenters to  ehad to mkae sure they match html
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(html);
    });}

    else if(req.url.match("\.css$")){
        let cssPath = path.join(__dirname,'public', req.url);
        let fileStream = fs.createReadStream(cssPath, 'UTF-8');
        res.writeHead(200, {"Content-Type" : "text/css"});
        fileStream.pipe(res);
    }
    console.log(req.url);
        

    }).listen(8080);

    




