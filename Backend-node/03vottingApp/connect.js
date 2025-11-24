const mongoose = require("mongoose");


// connection
async function connectMongoDb (){
  
  const url = "mongodb+srv://rishabhrajput245304_db_user:HUvHs4mNSpqbpUl9@vottingapp.mjybm9x.mongodb.net/?appName=vottingApp";
  
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