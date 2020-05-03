/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Modality', {
    modalityId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    modalityName: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'Modality'
  });
};
