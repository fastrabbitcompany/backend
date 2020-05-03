'use strict';
module.exports.build = (DataTypes) =>{
    return {
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
        photo: {
            type: "LONGBLOB",
            allowNull: true
        },
        username: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        salt: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        isActive: {
            type: DataTypes.INTEGER(4),
            allowNull: true,
            defaultValue: '1'
        }
    };
}
