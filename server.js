const express = require('express');
const connectDb = require('./config/db');
const User = require('./models/User');
// const authRoutes = require('./routers/authRoutes');
// app.use('/api/auth', authRoutes);
require('dotenv').config();
// connectDb();
const app=express();
app.use(express.json());
app.get('/thiru',(req,res)=>{
    res.send("hello thiru welcome to node js programming");
})

app.listen(4000,()=>{
    console.log("server is running on port 4000");
})