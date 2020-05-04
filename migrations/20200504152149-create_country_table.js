'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Country', {
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
                },
                // Timestamps
                createdAt: Sequelize.DATE,
                updatedAt: Sequelize.DATE,
            }
        )
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Country');
    }
};
