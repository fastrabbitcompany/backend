/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Ticket', {
    ticketId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ticketCreationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ticketSolvedDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ticketEmployee: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Employee',
        key: 'employeeId'
      }
    },
    ticketUser: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Shipping',
        key: 'shippingId'
      }
    },
    ticketStatus: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ticketScore: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ticketShipping: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ticketDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ticketSolution: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'Ticket'
  });
};
