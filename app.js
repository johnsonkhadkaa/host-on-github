
const express = require('express');
const mongoose = require('mongoose');

// const url = 'mongodb://localhost:27017/hostingDb'

const apps= express();

// mongoose.connect(url,{useNewUrlParser:true})
// const con = mongoose.connection


apps.get('/',(req,res)=>{
    res.send("Hello World!")
})

apps.get('/products', (req,res)=>{
    res.send("Welcome to products")
})

apps.get('/products/:id', (req,res)=>{
    const id = req.params.id;
    res.send('<h2>product id:</h2>'+ id)
})


apps.listen(process.env.PORT||9000,(req , res)=>{
    console.log("Server is Running ...");
})