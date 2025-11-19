const mongoose = require("mongoose");


// connection
async function connectMongoDb (){
  
  const url = "mongodb+srv://rishabhrajput245304_db_user:sct62Nw2f3KfnDIQ@backend.ri11bts.mongodb.net/?appName=backend";
  
  mongoose.connect(url)
    .then(() => console.log("mongodb is connected"))
    .catch(err => {
      console.error("Mongo Err:", err.message);
      console.error(err); 
    });

}

module.exports={
  connectMongoDb,
}