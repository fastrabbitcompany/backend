const Sequelize = require('sequelize');

module.exports = sequelize.define('Route', {
    routeId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    routeConnection: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: "Connection",
            key: 'connectionId'
        }
    },
    routeLocation: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: "Location",
            key: "locationId"
        }
    },
    routeOrder: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Route'
});