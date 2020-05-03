/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShippingDetails', {
    shippingDetailsId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shippingDetailsPackageType: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'PackageType',
        key: 'packageTypeId'
      }
    },
    shippingDetailsWidthCentimeters: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    shippingDetailsHeightCentimeters: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    shippingDetailsWeightGrams: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    shippingDetailsDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    shippingDetailsCreatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'ShippingDetails'
  });
};
