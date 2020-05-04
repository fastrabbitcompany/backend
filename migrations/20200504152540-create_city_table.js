'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('City', {
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
      },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('City')
  }
};
