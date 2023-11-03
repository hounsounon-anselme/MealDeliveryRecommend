'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../config/squeleze-config');

const User = sequelize.define('User', {
        ID: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        CountryCode: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'countries',
                key: 'PhoneCode',
            },
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        
        modelName: 'User',
        tableName: 'users',
    });


    module.exports= User;
