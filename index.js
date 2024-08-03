const express = require('express');
const mongoose = require("mongoose");
const url = 'mongodb://0.0.0.0/students'
const app = express();

mongoose.connect(url,{useNewUrlParser: true});
const con = mongoose.connection;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json()); 

con.on('open', () => {
  console.log('MongoDB connected');
});

const studentrouter = require("./Routes/students")
app.use('/student', studentrouter);

app.listen(4020,() => console.log("sever running"))