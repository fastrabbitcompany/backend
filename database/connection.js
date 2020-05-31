const Sequelize = require('sequelize');
const config = require('../config/config.json')["development"];
let newconfig = {
    ...config,
    define: {
        timestamps: false
    }};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    newconfig
);
module.exports = sequelize;
global.sequelize = sequelize;