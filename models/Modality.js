const Sequelize = require('sequelize');

module.exports = sequelize.define('Modality',{
    modalityId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    modalityName: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'Modality'
});