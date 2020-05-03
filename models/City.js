/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('City', {
    cityId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cityCountry: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Country',
        key: 'countryId'
      },
      unique: true
    },
    cityName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cityCode: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'City'
  });
};
