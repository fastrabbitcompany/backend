/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let Employee = sequelize.define('Employee', {
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
        model: 'User',
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
    employeeIsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'Employee'
  });
  return Employee
};
