/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PackageType', {
    packageTypeId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    packageTypeName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    packageTypeCreatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    packageTypeIsActive: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'PackageType'
  });
};
