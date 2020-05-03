/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Rol', {
    roleId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rolName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    roleCreateAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rolIsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'Rol'
  });
};
