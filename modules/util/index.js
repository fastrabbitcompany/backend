
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