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
        await
        queryInterface.createTable('location_user', {
            ID: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            userID: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'ID',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            locationID: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'locations',
                    key: 'ID',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        })
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.dropTable('location_user');

    }
};