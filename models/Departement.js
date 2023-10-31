module.exports = (sequelize, DataTypes) => {
    const Departement = sequelize.define('Departement', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        countryID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    });

    Departement.associate = (models) => {
        // Association à la table des pays (countries)
        Departement.belongsTo(models.Country, {
            foreignKey: 'countryID',
            as: 'country',
        });
    };

    return Departement;
};