const Sequelize = require('sequelize');
module.exports = sequelize.define('ShippingStatusHistory', {
    ShippingStatusHistoryId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    ShippingStatusHistoryShipping: {
        type: Sequelize.BIGINT,
        allowNull: false,
        reference:{
            model:'Shipping',
            key:'shippingId'
        }
    },
    ShippingStatusHistoryRoute: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
            model:"Route",
            key:"routeId"
        }
    },
    ShippingStatusHistoryEmployee:{
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
            model:"Employee",
            key:"employeeId"
        }
    },
    ShippingStatusHistoryStatus:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'ShippingStatusHistory'
});
