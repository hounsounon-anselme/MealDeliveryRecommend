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
        await queryInterface.createTable('reviews', {
            ID: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
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
            disheID: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'dishes',
                    key: 'ID',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            rating: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            text: {
                type: Sequelize.TEXT,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */

        await queryInterface.dropTable('reviews');
    }
};