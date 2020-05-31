'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ShippingStatusHistory',{
      ShippingStatusHistoryId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      ShippingStatusHistoryShipping: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
          model:'Shipping',
          key:'shippingId'
        }
      },
      ShippingStatusHistoryRoute: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
          model:"Route",
          key:"routeId"
        }
      },
      ShippingStatusHistoryEmployee:{
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
          model:"Employee",
          key:"employeeId"
        }
      },
      ShippingStatusHistoryStatus:{
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ShippingStatusHistory')
  }
};
