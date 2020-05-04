const jwt = require('jsonwebtoken')
const secret = require('../../config/app_config').secret

module.exports.createToken = (obj) =>{
    return jwt.sign(obj,secret);
}