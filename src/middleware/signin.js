'use strict';

const base64 = require('base-64');


module.exports = (req, res, next) => {
    let basicAuthComponents = req.headers.authorization.split(' ')  // ['Basic', 'sdkjdsljd=']
    let encodedString = basicAuthComponents.pop();  // sdkjdsljd=
    let decodedString = base64.decode(encodedString); // "username:password"
    let [username, password] = decodedString.split(':');
    req.body.username = username;
    req.body.password = password;
    console.log("MIDDLE: :", req.body)
         next()
    }

   


