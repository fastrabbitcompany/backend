/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Country', {
    countryId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    countryCode: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    countryName: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'Country'
  });
};
