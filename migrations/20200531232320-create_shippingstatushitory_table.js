'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ShippingStatusHistory',{
      shippingStatusHistoryId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      shippingStatusHistoryShipping: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
          model:'Shipping',
          key:'shippingId'
        }
      },
      shippingStatusHistoryRoute: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
          model:"Route",
          key:"routeId"
        }
      },
      shippingStatusHistoryEmployee:{
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
          model:"Employee",
          key:"employeeId"
        }
      },
      shippingStatusHistoryStatus:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ShippingStatusHistory')
  }
};
