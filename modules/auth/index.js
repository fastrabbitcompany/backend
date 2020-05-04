const jwt = require('jsonwebtoken')
const secret = require('../../config/app_config').secret

module.exports.createToken = (obj) =>{
    return jwt.sign(obj,secret,{ expiresIn: '24h' });
}
module.exports.getFromToken =(token) => {
    return jwt.verify(token,secret);
}
module.exports.getUsernameFromToken = async (token) =>{
    return jwt.verify(token,secret).username;
}