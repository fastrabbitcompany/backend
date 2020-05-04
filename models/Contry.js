const Sequelize = require('sequelize');
module.exports = sequelize.define('Country', {
    countryId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    countryCode: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    countryName: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'Country'
});
