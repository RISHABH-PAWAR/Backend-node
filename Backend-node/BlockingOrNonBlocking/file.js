const { isUtf8 } = require("buffer");
const fs = require("fs");
const os = require("os");
console.log(os.cpus().length);




//blocking...


const result1 = fs.readFileSync("./contacts.txt" , "utf-8" );

console.log(result1);

//non blocking 

const result2 = fs.readFile("./contacts.txt" , "utf-8" , (err,result) =>{
  console.log(result2)
});
