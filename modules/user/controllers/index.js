const UserModel = require('../../../models/User');
const EmployeeModel = require('../../../models/Employee');
const auth = require('../../auth');
//register method
module.exports.register = async (req, res) => {
    try {
        const data = req.body;
        validateRegister(data);
        await UserModel.create(data);
        res.json({
            success: true,
            message: 'user successfully created'
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

validateRegister = (dataForm) => {
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

module.exports.login = async (req, res) => {
    try {
        const data = req.body;
        let {email, password} = data;
        let user = await UserModel.findOne({where: {email, password}});
        if (user === null) {
            throw new Error("User doesn't exist");
        } else {
            let {
                username,
                email,
                id
            } = user;
            let em = await UserModel.findAll({where: {id}, include: [{model: EmployeeModel, as: "UserToLogin"}]});
            console.log(em.length);
            let token = auth.createToken({username});
            res.json({
                success: true,
                token,
                rol: null,
                username,
                email
            });
        }
    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        });
    }
}

module.exports.checkToken = async (req, res) => {
    try {
        const data = req.body;
        let {token} = data;
        let username = await auth.getUsernameFromToken(token);
        res.json({
            success: true,
            username
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        });
    }
}

