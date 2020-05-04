const Sequelize = require('sequelize');

module.exports = module.exports = sequelize.define('City', {
    cityId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cityCountry: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: 'Country',
            key: 'countryId'
        },
        unique: false
    },
    cityName: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    cityCode: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'City'
});