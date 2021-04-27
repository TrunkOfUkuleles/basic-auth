'use strict';

const express = require('express');
const app = express();
const cors = require('cors')
const signin = require('./routes/signin.js');
const signup = require('./routes/signup.js');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
  res.send("LIVE")
})
app.use(signup);
app.use(signin);
        
 

module.exports = {
  server: app,
  start: port => {
      app.listen(port, console.log(port));
      }
    }