const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
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
        },
    });

    return Country;
};