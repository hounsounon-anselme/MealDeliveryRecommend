'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('locations', { id: Sequelize.INTEGER });
         */
        await queryInterface.createTable('locations', {
            ID: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            latitude: {
                type: Sequelize.DECIMAL(10, 6),
                allowNull: false,
            },
            longitude: {
                type: Sequelize.DECIMAL(10, 6),
                allowNull: false,
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
         * await queryInterface.dropTable('locations');
         */
        await queryInterface.dropTable('locations');

    }
};