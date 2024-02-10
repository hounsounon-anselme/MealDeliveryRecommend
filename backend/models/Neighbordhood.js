'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Neighborhood extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Neighborhood.belongsTo(models.Arrondissement, {
                foreignKey: 'arrondissementID',
                as: 'arrondissement',
            });
        }
    }
    Neighborhood.init({
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        arrondissementID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    }, {
        sequelize,
        modelName: 'Neighborhood',
        tableName: 'neighborhoods',
    });


    return Neighborhood;
};