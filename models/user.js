'use strict';
const UserDefinition = require('../table_definitions').User;

module.exports = (sequelize,DataTypes) =>{
    const User = sequelize.define(
        'User',
        UserDefinition.build(DataTypes),
        {}
    );
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
}

