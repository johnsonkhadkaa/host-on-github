
const express = require('express');


const apps= express();

apps.get('/',(req,res)=>{
    res.send("Hello World!")
})

apps.get('/products', (req,res)=>{
    res.send("Welcome to products")
})

apps.get('/products/:id', (req,res)=>{
    const id = req.params.id;
    res.send('products id: '+id)
})


apps.listen(9000,(req , res)=>{
    console.log("Server is Running ...");
})