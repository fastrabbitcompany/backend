'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Country', {
                countryId: {
                    type: DataTypes.BIGINT,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                countryCode: {
                    type: DataTypes.STRING(100),
                    allowNull: false
                },
                countryName: {
                    type: DataTypes.STRING(100),
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
