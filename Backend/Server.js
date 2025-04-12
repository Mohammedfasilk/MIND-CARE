const express = require("express")
const mongoose = require("mongoose")
const cors =  require("cors")
const dotenv = require('dotenv').config()
const db = require('./Config/db')
const app = express()
const AuthRoute = require('./Routes/AuthRoute');

//middlewares
app.use(express.json())
app.use(cors())
//routes

app.use('/api/users', AuthRoute);

//port connection
const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log("running at",PORT);
    
})



