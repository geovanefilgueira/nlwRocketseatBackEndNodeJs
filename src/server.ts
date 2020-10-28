import express = require('express');
import { request } from 'http';
import './database/conection';
const app = express();

app.get('/users',(req,res)=>{
    return res.json({message:'hello word'});
})


app.listen(3333,() =>{
    console.log("servidor rodando")
})

// npm i @types/node
// npm i @types/node
//npm i nodemon
//npm install -g ts-node
//npm i -g typescript
//npm i ts-node-dev
//npm i sqlite3 
//npm i typeorm
//npm i express
//31:55