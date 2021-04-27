'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})


userSchema.pre('save', async function(){
    console.log("YOOOOOOOOOO")
    this.password = await bcrypt.hash(this.password, 10)
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;