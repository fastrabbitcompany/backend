/* jshint indent: 2 */
const Sequelize = require('sequelize');

module.exports = sequelize.define('user', {
    id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    lastName: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    photo: {
        type: "LONGBLOB",
        allowNull: true
    },
    username: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    },      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.fn('current_timestamp')
    },
    updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.fn('current_timestamp')
    },
    isActive: {
        type: Sequelize.INTEGER(4),
        allowNull: true,
        defaultValue: '1'
    }
}, {
    tableName: 'user'
});
