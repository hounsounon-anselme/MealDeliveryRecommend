'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Restaurant extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Restaurant.belongsTo(models.Neighborhood, {
                foreignKey: 'neighbordhoodID',
                as: 'neighborhood',
            });
        }
    }
    Restaurant.init({
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },

        neighbordhoodID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cuisineType: {
            type: DataTypes.STRING,
        },
        averageRatings: {
            type: DataTypes.FLOAT,
        },
        openingHours: {
            type: DataTypes.STRING,
        },
        closingHours: {
            type: DataTypes.STRING,
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
        modelName: 'Restaurant',
        tableName: 'restaurants',
    });


    return Restaurant;
};