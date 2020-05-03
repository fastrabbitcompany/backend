const UserModel = require('../../../models').Users;
//register method
module.exports.register = async (req,res) =>{
    try {
        const data = req.body;
        validate(data);
        await UserModel.create(data);
        res.json({
            success: true,
            message: 'user succesful created'
        });
    }catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports.login = async (req,res) =>{
    res.send("login")
}


validate = (dataForm) =>{
    if (!dataForm.username || dataForm.username == '') {
        throw new Error('name parameter is required');
    }
    if (!dataForm.email || dataForm.email == '') {
        throw new Error('email parameter is required');
    }
    if (!dataForm.password) {
        throw new Error('password parameter is required');
    }
    if (dataForm.password.length < 6) {
        throw new Error('password must have more than 5 characters');
    }
}

