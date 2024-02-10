'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Arrondissement extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Arrondissement.belongsTo(models.Departement, {
                foreignKey: 'departementID',
                as: 'departement',
            });
        }
    }

    Arrondissement.init({
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        departementID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    }, {
        sequelize,
        modelName: 'Arrondissement',
        tableName: 'arrondissements',
    });

    return Arrondissement;
};