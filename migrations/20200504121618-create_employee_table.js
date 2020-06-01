'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employee', {
      employeeId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      employeeUser: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        }
      },
      employeeRole:{
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'Role',
          key: 'roleId'
        },
        defaultValue: 1
      },
      employeeIsActive: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue:1
      },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("employee")
  }
};
