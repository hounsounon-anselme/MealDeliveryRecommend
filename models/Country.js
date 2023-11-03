'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../config/squeleze-config');
const Country = sequelize.define('Country', {
        CountryName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CountryCode: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,

        },

        PhoneCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        FlagURL: {
            type: DataTypes.STRING,
        }
    }, {
        sequelize,
        modelName: 'Country',
        tableName: 'countries',
    });

    module.exports=Country;
