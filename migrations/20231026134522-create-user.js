'use strict';
/** @type {import('sequelize-cli').Migration} */
//const { Sequelize, DataTypes } = require('sequelize');
//const Sequelize = require('./sequelize');
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            username: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,


            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false,

            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false,

            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,

            },

            phone: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};