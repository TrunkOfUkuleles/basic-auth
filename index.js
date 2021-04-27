'use strict';

const server = require('./src/server.js');
const mongoose = require('mongoose');
const options = { useNewUrlParser: true, useUnifiedTopology: true }
require('dotenv').config();
let PORT = process.env.PORT || 3333;
let MONGO = process.env.MONGODB_URI

mongoose.connect(MONGO, options)
  .then(() => {
    console.log("Connected MONGO start")
    server.start(PORT);
  })
  .catch(e => console.error('Could not start server', e.message));

