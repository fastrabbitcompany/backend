const Sequelize = require('sequelize');
module.exports = sequelize.define('ShippingStatusHistory', {
    shippingStatusHistoryId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    shippingStatusHistoryShipping: {
        type: Sequelize.BIGINT,
        allowNull: false,
        reference:{
            model:'Shipping',
            key:'shippingId'
        }
    },
    shippingStatusHistoryRoute: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
            model:"Route",
            key:"routeId"
        }
    },
    shippingStatusHistoryEmployee:{
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
            model:"Employee",
            key:"employeeId"
        }
    },
    shippingStatusHistoryStatus:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'ShippingStatusHistory'
});
