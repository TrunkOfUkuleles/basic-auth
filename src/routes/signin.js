'use strict';

const express = require('express');
const User = require('../models/userModel.js');
const authLayer = require('../../src/middleware/signin.js');

const appRouter = express.Router();

appRouter.post('/login', authLayer, signIn);

  
  async function signIn(req, res) {  
    const username = req.body.username
    try {
        const user = await User.findOne({ username })
        const valid = await bcrypt.compare(req.body.password, user.password);
        if (valid) {
          res.status(200).json(user);
        }
        else {
          throw new Error('Invalid User')
        }
      } catch (error) { res.status(403).send("Invalid Login"); }
  }
  
  
  module.exports = appRouter;