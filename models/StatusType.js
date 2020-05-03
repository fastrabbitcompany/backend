/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StatusType', {
    statusTypeId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    statusTypeName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    statusTypeDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    statusTypeIcon: {
      type: "BLOB",
      allowNull: true
    },
    statusTypeCreatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    statusTypeIsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'StatusType'
  });
};
