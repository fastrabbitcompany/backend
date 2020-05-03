/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Connection', {
    connectionId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    connectionLocationA: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Location',
        key: 'locationId'
      }
    },
    connectionLocationB: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Location',
        key: 'locationId'
      }
    },
    connectionModality: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Modality',
        key: 'modalityId'
      }
    },
    connectionPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    connectionMinutes: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'Connection'
  });
};
