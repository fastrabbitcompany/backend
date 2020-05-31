//import models
const User = require('../models/User');
const Employee = require('../models/Employee');
const Role = require('../models/Role');
const City = require('../models/City');
const Country = require('../models/Country');
const Location = require('../models/Location')
const Modality = require('../models/Modality')
const Connection = require('../models/Connection')
const Route = require('../models/Route')
const Shipping = require('../models/Route')
const ShippingStatusHistory = require('../models/ShippingStatusHistory')
module.exports = async () =>{
    //create the relations
    // User <- Employee
    Employee.belongsTo(User,{as:"UserEmployee",foreignKey:"employeeUser"});
    User.hasMany(Employee,{as:"UserEmployee",foreignKey:"employeeUser"});
    // Employee -> Role
    Employee.belongsTo(Role,{as:"RoleEmployee",foreignKey:"employeeRole"});
    Role.hasMany(Employee,{as:"RoleEmployee",foreignKey:"employeeRole"})
    //Countru <- City
    City.belongsTo(Country,{as:"CityCountry",foreignKey:"cityCountry"});
    Country.hasMany(City,{as:"Cities",foreignKey:"cityCountry"});
    //location -> City
    Location.belongsTo(City,{as:"LocationCity",foreignKey:"locationCity"});
    City.hasMany(Location,{as:"locations",foreignKey:"locationCity"});
    //connections -> Locations
    Connection.belongsTo(Location,{as:"ConnectionLocationA",foreignKey:"connectionLocationA"});
    Location.hasMany(Connection,{as:"ConnectA",foreignKey:"connectionLocationA"});
    //connections -> Locations
    Connection.belongsTo(Location,{as:"ConnectionLocationB",foreignKey:"connectionLocationB"});
    Location.hasMany(Connection,{as:"ConnectB",foreignKey:"connectionLocationB"});
    //Connection -> Modality
    Connection.belongsTo(Modality,{as:"ConnectionModality",foreignKey:"connectionModality"});
    Modality.hasMany(Connection,{as:"ModalityConnection",foreignKey:"connectionModality"});
    //Route -> Connection
    Route.belongsTo(Connection,{as:"RouteHasConnection",foreignKey:"routeConnection"});
    Connection.hasMany(Route,{as:"RouteConnection",foreignKey:"routeConnection"});
    //Route -> Location
    Route.belongsTo(Location,{as:"RouteHasLocation",foreignKey:"routeLocation"});
    Location.hasMany(Route,{as:"RouteLocation",foreignKey:"routeLocation"});
    //Connection -> Shipping
    Shipping.belongsTo(Connection,{as:"ShippingHasConnection",foreignKey:"shippingConnection"});
    Connection.hasMany(Shipping,{as:"ShippingConnection",foreignKey:"shippingConnection"});
    //User -> Shipping
    Shipping.belongsTo(User,{as:"ShippingHasUser",foreignKey:"shippingOwner"});
    User.hasMany(Shipping,{as:"UserShipping",foreignKey:"shippingOwner"});
    //ShippingStatusHistory -> Shipping
    ShippingStatusHistory.belongsTo(Shipping,{as:"ShippingStatusHistoryHasShipping",foreignKey:"shippingStatusHistoryShipping"});
    Shipping.hasMany(ShippingStatusHistory,{as:"ShippingShippingStatusHistory",foreignKey:"shippingStatusHistoryShipping"});
    //ShippingStatusHistory -> employee
    ShippingStatusHistory.belongsTo(Employee,{foreignKey:"shippingStatusHistoryEmployee"});
    Employee.hasMany(ShippingStatusHistory,{foreignKey:"shippingStatusHistoryEmployee"});
    //ShippingStatusHistory -> route
    ShippingStatusHistory.belongsTo(Route,{foreignKey:"shippingStatusHistoryRoute"});
    Route.hasMany(ShippingStatusHistory,{foreignKey:"shippingStatusHistoryRoute"});

};

