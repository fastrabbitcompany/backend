const Sequelize = require('sequelize');
module.exports = sequelize.define('Location', {
    locationId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    locationCity: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: 'City',
            key: 'cityId'
        }
    },
    locationDescription: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    locationAddress: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    locationLatitude: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    locationLongitude: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    locationIsActive: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
}, {
    tableName: 'Location'
});