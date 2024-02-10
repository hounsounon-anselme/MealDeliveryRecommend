'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */

        await queryInterface.createTable('restaurants', {
            ID: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
            },

            neighbordhoodID: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'neighborhoods',
                    key: 'ID',
                },
            },

            cuisineType: {
                type: Sequelize.STRING,
            },
            averageRatings: {
                type: Sequelize.FLOAT,
            },
            openingHours: {
                type: Sequelize.STRING,
            },

            closingHours: {
                type: Sequelize.STRING,
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            }
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.dropTable('restaurants');
    }
};