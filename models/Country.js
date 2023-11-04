'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../config/squeleze-config');
<<<<<<< HEAD

const Country = sequelize.define('Country', {
    CountryName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    CountryCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
=======
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
>>>>>>> 2240e17ae5193e7b8ae00b9e5c6f52b588733b59

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

<<<<<<< HEAD
module.exports = Country
=======
    module.exports=Country;
>>>>>>> 2240e17ae5193e7b8ae00b9e5c6f52b588733b59
