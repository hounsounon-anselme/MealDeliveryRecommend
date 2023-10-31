'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Location extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // associations 
        }
    }

    Location.init({
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        latitude: {
            type: DataTypes.DECIMAL(10, 6),
            allowNull: false,
        },
        longitude: {
            type: DataTypes.DECIMAL(10, 6),
            allowNull: false,
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
        sequelize,
        modelName: 'Location',
        tableName: 'locations',
    });

    return Location;
};