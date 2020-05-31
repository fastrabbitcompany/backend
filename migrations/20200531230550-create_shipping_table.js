'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Shipping', {
            shippingId: {
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            shippingOwner: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'User',
                    key: 'id'
                }
            },
            shippingConnection: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'Connection',
                    key: 'connectionId'
                }
            },
            shippingDescription: Sequelize.STRING(1000),
            shippingWidth: Sequelize.DECIMAL(19, 4),
            shippingHeight: Sequelize.DECIMAL(19, 4),
            shippingWeight: Sequelize.DECIMAL(19, 4),
            shippingPrice: Sequelize.DECIMAL(19, 4),
            // Timestamps
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Shipping')
    }
};
