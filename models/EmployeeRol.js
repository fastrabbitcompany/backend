/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeRol', {
    employeeRolId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    employeeRolEmployee: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Employee',
        key: 'employeeId'
      }
    },
    employeeRolLocation: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Location',
        key: 'locationId'
      }
    },
    employeeRolRol: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Rol',
        key: 'roleId'
      }
    },
    employeeRolCreatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    employeeRolIsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'EmployeeRol'
  });
};
