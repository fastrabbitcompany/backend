/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Shipping', {
    shippingId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shippingOwner: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    shippingPickupAddress: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    shippingDeliveryAddress: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shippingInitialLocation: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Location',
        key: 'locationId'
      }
    },
    shippingFinalLocation: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Location',
        key: 'locationId'
      }
    },
    shippingDetails: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ShippingDetails',
        key: 'shippingDetailsId'
      }
    },
    shippingDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    shippingCreatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    shippingIsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'Shipping'
  });
};
