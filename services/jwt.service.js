
import jsonwebtoken from jsonwebtoken;

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

/*
Methods needed
- Create JWT 
- Validate JWT
*/

/*

Inputs
1. Plain text password
2. Hashed Password
3. Remaining data in {} format 
*/


hashedpw = bcrypt.hashpw(passwd.encode('utf-8'), salt=bcrypt.gensalt())


function createJWT(params) {

    let plainTextPassword = params.plainTextPassword
    let


}