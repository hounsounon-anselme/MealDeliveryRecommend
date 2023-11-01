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
        await queryInterface.createTable('orders', {
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
            restaurantID: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'restaurants',
                    key: 'ID',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },


            orderStatusID: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'orders_status',
                    key: 'ID',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            orderDateTime: {
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
        await queryInterface.dropTable('orders');
    }
};