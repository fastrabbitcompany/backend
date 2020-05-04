'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Connection', {
            connectionId: {
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            connectionLocationA: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'Location',
                    key: 'locationId'
                }
            },
            connectionLocationB: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'Location',
                    key: 'locationId'
                }
            },
            connectionModality: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'Modality',
                    key: 'modalityId'
                }
            },
            price: {
                type: Sequelize.DECIMAL,
                allowNull: false
            },
            time: {
                type: Sequelize.DECIMAL,
                allowNull: false
            },
            distance: {
                type: Sequelize.DECIMAL,
                allowNull: false
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable(
            'Connection'
        );
    }
};
