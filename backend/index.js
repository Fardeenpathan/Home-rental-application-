const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(cors());
dotenv.config();


app.listen(process.env.PORT, ()=>{
  console.log(`your current server is http://localhost:${process.env.PORT}`)
})


app.get("/", (req,res)=>{
   res.send("<h1>This is server testing</h1>")
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
   console.log("Database connection successfully")
}).catch((error)=>{
   console.log("your error is :" , error)
})

 