'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
        'Role', {
          roleId: {
            type: Sequelize.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          roleName: {
            type: Sequelize.STRING(100),
            allowNull: false
          },
          roleIsActive: {
            type: Sequelize.BOOLEAN,
            allowNull: true
          },
          // Timestamps
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE
        }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('role')
  }
};
