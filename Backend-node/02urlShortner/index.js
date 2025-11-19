const express = require("express");
const urlRoute = require("./routes/url")
const URL = require("./models/url")
const {connectTOMongoDB} = require("./connect")

const app = express();
const PORT = 8001;


connectTOMongoDB("mongodb+srv://rishabhrajput245304_db_user:UI0W07V2qtgyQQoh@urlshortner.ubcmhqm.mongodb.net/?appName=urlShortner")
.then(()=> console.log("MongoDB is connected"));

app.use(express.json())
app.get("/:shortId",async(req,res)=>{
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate({
    shortId
  },{
    $push:{
      visitHistory: {
        timestamp: Date.now()
      },
    },
  })
  res.redirect(entry.redirectURL)
})

app.use("/url" , urlRoute)
app.listen(PORT , ()=> console.log("Server is started at PORT 8001"))