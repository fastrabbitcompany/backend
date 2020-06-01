/* jshint indent: 2 */
const Sequelize = require('sequelize');

module.exports = sequelize.define('Employee', {
    employeeId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    employeeUser: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    employeeRole:{
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: 'Role',
            key: 'roleId'
        },
        defaultValue: 1
    },
    employeeIsActive: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue:1
    },
}, {
    tableName: 'Employee'
});
