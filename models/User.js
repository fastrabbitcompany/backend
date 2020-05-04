/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    phoneNumber: {
      type: DataTypes.STRING,
          allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    photo: {
      type: "LONGBLOB",
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp')
    },
    isActive: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'User'
  });
  return User
};
