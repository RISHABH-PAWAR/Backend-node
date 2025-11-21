const express = require("express");
const path = require("path")
const urlRoute = require("./routes/url")
const URL = require("./models/url")
const {connectTOMongoDB} = require("./connect")

const app = express();
const PORT = 8001;


connectTOMongoDB("mongodb+srv://rishabhrajput245304_db_user:UI0W07V2qtgyQQoh@urlshortner.ubcmhqm.mongodb.net/?appName=urlShortner")
.then(()=> console.log("MongoDB is connected"));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

app.use(express.json())

app.get("/test" async(req,res)=>{
  const allUrls = await URL.find({});
  return res.render("home",{
    urls: allUrls,
    
  })
})

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