const UserModel = require('../../../models/User');
const EmployeeModel = require('../../../models/Employee');
const RoleModel = require('../../../models/Role')
const auth = require('../../auth');
const Util = require('../../util' )

//register method
module.exports.createEmployee = async (req, res) => {
    try {
       
        const data = req.body;
        Util.validateRegister(data);
        const  createduser =  await UserModel.create(data);
        await EmployeeModel.create({...data,employeeUser:createduser.id});
        res.json({
            success: true,
            message: 'user and employeesuccessfully created'
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};



module.exports.getAllEmployees = async (req, res) => {
    try {
        const data = req.body;
        let {token} = data;
        let username = await auth.checkToken(token);
        let users = await EmployeeModel.findAll(
           {
                include: [
                    {
                        model: UserModel,
                        as: "UserEmployee",
                        required:false
                    },
                    {
                        model: RoleModel,
                        as: "RoleEmployee",
                        required:false
                    }
                ]
            }); 

        res.json({
            success: true,
            users
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        });
    }
}

