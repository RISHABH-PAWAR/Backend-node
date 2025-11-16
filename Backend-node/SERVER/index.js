const http = require("http");
const fs = require("fs")
const url = require("url")
const express = require("express");

const app = express();

app.get("/",(req,res)=>{
  return res.send("Hello from home page exp")
});

app.get("/about",(req,res)=>{
  return res.send(`Hello you are ${req.query.name} and you are ${req.query.age}`)
})
 

function myHandler (req,res){
  if(req.url === '/favicon.ico') return res.end();
  const log = `${Date.now()}: ${req.method} ${req.url} New req recived \n `;
  const myUrl = url.parse(req.url,true);
  console.log(myUrl)
  fs.appendFile('log.txt',log, (err,data)=> {
    switch(myUrl.pathname){
      case '/': 
      if(req.method === 'GET') res.end("Youre at home page")
      break;
      case '/about':
      const username = myUrl.query.myname
      res.end(`I am ${username}`);
      break;
      case'/signup':
      if(req.method === 'GET') res.end("This is signup form")
      else if(req.method ==="POST") res.end ("Success")
      default: 
      res.end("404 error")
    }
  });
  
}


app.listen(8000,()=> console.log("Server Start"))

// const myServer = http.createServer(app);

// myServer.listen(8000, ()=>console.log("server started"));