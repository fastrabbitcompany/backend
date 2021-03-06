const Sequelize = require('sequelize');

module.exports = sequelize.define('Role', {
    roleId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    roleName: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    roleIsActive: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
}, {
    tableName: 'Role'
});