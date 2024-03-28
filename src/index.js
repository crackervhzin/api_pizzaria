const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');
app.use(express.json());
 
const router = express.Router()
 
 
app.use('/',routes);
app.listen(3333, ()=>{
    console.log('SERVIDOR RODANDO')
});
 
const db= require('./db');