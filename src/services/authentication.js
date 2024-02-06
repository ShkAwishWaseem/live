import jwt from "jsonwebtoken"
const secret = "$uperman123"


function createTokenForUser (user) {
     const payload = {
          name : user.name,
          email: user.email
     }
     const token = jwt.sign(payload, secret);
     return token; 
}
          



module.exports = {
     createTokenForUser,
     secret
}