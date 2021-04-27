'use strict';

const base64 = require('base-64'); // this is for encoding and decoding -> passing over the internet (happens on FE and BE)
const bcrypt = require('bcrypt'); // this is for actual pw management -> hash it to save it -> compare hash with a reg pass to confirm it



async function validate(password, hashed) {
    // let decoded = base64.decode(password)
    return await bcrypt.compare(password, hashed);
    
  }

module.exports = validate