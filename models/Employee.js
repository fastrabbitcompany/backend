/* jshint indent: 2 */
const Sequelize = require('sequelize');

module.exports = sequelize.define('employee', {
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
        }
    },
    employeeDni: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    employeePin: {
        type: Sequelize.STRING(4),
        allowNull: false
    },
    employeeIsActive: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
}, {
    tableName: 'Employee'
});
