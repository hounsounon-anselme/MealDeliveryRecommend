'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, DataTypes) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */

        queryInterface.createTable('countries', {
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
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('countries');
         */
        await queryInterface.dropTable('countries');

    }
};