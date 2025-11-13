const fs = require("fs");

//sync
// fs.writeFileSync('./test.txt' , "heyee there")

//async
// fs.writeFile(".test.txt", "hello world async", (err) =>)

const result = fs.readFileSync("./contacts.txt","utf-8");


// fs.readFile("./contacts.txt","utf-8" , (err,result) =>{
//   if(err){
//     console.log("Error" , err)
//   }else{
//     console.log(result);
//   }
// });


fs.appendFileSync("./test.txt",`${Date.now()} Hyee there\n`)

