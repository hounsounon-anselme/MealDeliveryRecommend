'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('restaurants', {
            id: {
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
            address: {
                type: Sequelize.STRING,
            },
            latitude: {
                type: Sequelize.FLOAT,
            },
            longitude: {
                type: Sequelize.FLOAT,
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

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('restaurants');
    },
};