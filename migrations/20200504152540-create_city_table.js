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
        unique: true
      },
      cityName: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      cityCode: {
        type: Sequelize.STRING(100),
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('City')
  }
};
