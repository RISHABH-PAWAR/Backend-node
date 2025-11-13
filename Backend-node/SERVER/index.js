const http = require("http");
const fs = require("fs")

const myServer = http.createServer((req,res)=>{
  const log = `${Date.now()}: ${req.url} New req recived \n `;
  fs.appendFile('log.txt',log, (err,data)=> {
    switch(req.url){
      case '/': res.end("homepage");
      break;
      case '/about': res.end("I am rishabh ");
      break;
      default: res.end("404 error")
    }
  });
  
});

myServer.listen(8000, ()=>console.log("server started"));