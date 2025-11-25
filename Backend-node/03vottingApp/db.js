const mongoose = require("mongoose");

// connection
async function connectMongoDb (){
  // If already connected or connecting, skip to avoid duplicate listeners
  if (mongoose.connection && (mongoose.connection.readyState === 1 || mongoose.connection.readyState === 2)) {
    console.log("mongodb is already connected or connecting. Skipping connect.");
    return;
  }

  // Prefer environment variable, fall back to the hardcoded URL you had
  const url = process.env.MONGO_URL || "mongodb+srv://rishabhrajput245304_db_user:HUvHs4mNSpqbpUl9@vottingapp.mjybm9x.mongodb.net/?appName=vottingApp";

  try {
    await mongoose.connect(url);
    console.log("mongodb is connected");
  } catch (err) {
    console.error("Mongo Err:", err.message);
    console.error(err);
  }
}

module.exports={
  connectMongoDb,
}
