/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Employee', {
    employeeId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    employeeUser: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    employeeDni: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    employeePin: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    employeeCreatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    employeeCreatedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Employee',
        key: 'employeeId'
      }
    },
    employeeIsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'Employee'
  });
};
