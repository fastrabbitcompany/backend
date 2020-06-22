const bcrypt = require('bcryptjs');



module.exports.validateRegister = (dataForm) => {
    if (!dataForm.username || dataForm.username === '') {
        throw new Error('name parameter is required');
    }
    if (!dataForm.email || dataForm.email === '') {
        throw new Error('email parameter is required');
    }
    if (!dataForm.password) {
        throw new Error('password parameter is required');
    }
    if (dataForm.password.length < 6) {
        throw new Error('password must have more than 5 characters');
    }
}

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

module.exports.hashPassword = (password) => { 
    let hashedpassword = bcrypt.hashSync(password, salt);
    return hashedpassword;
}
module.exports.comparePassword = (hashedPassword, password) => {
    return bcrypt.compareSync(password, hashedPassword);
};