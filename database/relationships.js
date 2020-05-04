//import models
const User = require('../models/User')
const Employee = require('../models/Employee')

module.exports = async () =>{
    //create the relations
    // User <- Employee
    User.hasOne(Employee,{as:"UserToLogin",foreignKey:"employeeUser"})
};
