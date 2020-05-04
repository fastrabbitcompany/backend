const Sequelize = require('sequelize');

module.exports = module.exports = sequelize.define('role', {
    cityId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cityCountry: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'Country',
            key: 'countryId'
        },
        unique: true
    },
    cityName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cityCode: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'City'
});