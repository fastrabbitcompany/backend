/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Location', {
    locationId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    locationCity: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'City',
        key: 'cityCountry'
      }
    },
    locationDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    locationAddress: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    locationLatitude: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    locationLongitude: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    locationCreatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    locationIsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'Location'
  });
};
