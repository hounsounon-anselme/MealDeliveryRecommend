'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Country extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // associations 
        }
    }

    Country.init({
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

    return Country;
};