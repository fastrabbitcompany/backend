/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShippingStatusHistory', {
    shippingStatusHistoryId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shippingStatusHistoryShipping: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Shipping',
        key: 'shippingId'
      }
    },
    shippingStatusHistoryEmployeeInCharge: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Employee',
        key: 'employeeId'
      }
    },
    shippingStatusHistoryLocation: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Location',
        key: 'locationId'
      }
    },
    shippingStatusHistoryStatus: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'StatusType',
        key: 'statusTypeId'
      }
    },
    shippingStatusHistoryDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    shippingStatusHistoryCreatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    shippingStatusHistoryIsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'ShippingStatusHistory'
  });
};
