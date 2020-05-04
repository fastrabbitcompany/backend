//import models
const User = require('../models/User')
const Employee = require('../models/Employee')
const Role = require('../models/Role')


module.exports = async () =>{
    //create the relations
    // User <- Employee
    Employee.belongsTo(User,{as:"UserEmployee",foreignKey:"employeeUser"});
    User.hasMany(Employee,{as:"UserEmployee",foreignKey:"employeeUser"});
    // Employee -> Role
    Employee.belongsTo(Role,{as:"RoleEmployee",foreignKey:"employeeRole"});
    Role.hasMany(Employee,{as:"RoleEmployee",foreignKey:"employeeRole"})

};
