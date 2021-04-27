'use strict';

const express = require('express');
const app = express();
const cors = require('cors')
const signin = require('./routes/signin.js');
const signup = require('./routes/signup.js');
const notFound = require('./errors/404.js');
const bigError = require('./errors/500.js');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
  res.send("LIVE")
})
app.use(signup);
app.use(signin);
app.use("*", notFound),
app.use(bigError)
 

module.exports = {
  server: app,
  start: port => {
      app.listen(port, console.log(port));
      }
    }