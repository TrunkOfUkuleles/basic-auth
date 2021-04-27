'use strict';

const express = require('express');
const User = require('../models/userModel.js');
const authLayer = require('../../src/middleware/signin.js');

const signupRouter = express.Router();

signupRouter.post('/signup', authLayer, signUp);


async function signUp(req, res, next) {
    try {
        let obj = {
            username: req.body.username,
            password: req.body.password
        }
        const user = await new User(obj);
        const record = await user.save();
        res.status(201).json(record);
      } catch (e) { res.status(403).send(e.message); }
  }
  
  
  module.exports = signupRouter;