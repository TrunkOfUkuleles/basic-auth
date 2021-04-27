'use strict';

const base64 = require('base-64'); // this is for encoding and decoding -> passing over the internet (happens on FE and BE)
const bcrypt = require('bcrypt'); // this is for actual pw management -> hash it to save it -> compare hash with a reg pass to confirm it



async function encrypt(password) {
    // let decoded = base64.decode(password)
    let hashed = await bcrypt.hash(password, 10);
    console.log('hashed pw: ', hashed);
  
    let compare = await bcrypt.compare(password, hashed);
    console.log('is hash the same as plain text password', compare);
    return compare
  }

