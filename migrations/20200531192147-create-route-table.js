'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Route', {
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
            },
            // Timestamps
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Route')
    }
};
