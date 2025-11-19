const express = require("express");
const {connectMongoDb} = require("./connection")
const {logReqRes} = require("./middlewares")
const fs = require("fs");

const userRouter = require('./routes/users')

const app = express();
const PORT = 8000;

connectMongoDb();

app.use(express.urlencoded({extended: false}))

app.use(logReqRes("log.txt"));

app.use("/api/users",userRouter);


app.listen(PORT,() => console.log(`Server started at port ${PORT}`))