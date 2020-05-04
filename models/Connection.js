const Sequelize = require('sequelize');
module.exports = module.exports = sequelize.define('Connection', {
    connectionId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    connectionLocationA: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: 'Location',
            key: 'locationId'
        }
    },
    connectionLocationB: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: 'Location',
            key: 'locationId'
        }
    },
    connectionModality: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: 'Modality',
            key: 'modalityId'
        }
    },
    priceVolume: {
        type: Sequelize.DECIMAL(19,4),
        allowNull: false
    },
    priceWeight: {
        type: Sequelize.DECIMAL(19,4),
        allowNull: false
    },
    priceDistance: {
        type: Sequelize.DECIMAL(19,4),
        allowNull: false
    },
    time: {
        type: Sequelize.DECIMAL(19,4),
        allowNull: false
    },
    distance: {
        type: Sequelize.DECIMAL(19,4),
        allowNull: false
    }
}, {
    tableName: 'Connection'
});