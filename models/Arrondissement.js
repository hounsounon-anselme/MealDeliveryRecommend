module.exports = (sequelize, DataTypes) => {
    const Arrondissement = sequelize.define('Arrondissement', {
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

    });

    Arrondissement.associate = (models) => {
        // Association à la table des départements (departements)
        Arrondissement.belongsTo(models.Departement, {
            foreignKey: 'departementID',
            as: 'departement',
        });
    };

    return Arrondissement;
};