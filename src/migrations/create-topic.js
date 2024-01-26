'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('topics', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                require: true,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            groupQuantity: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            maxGroupQuantity: {
                type: Sequelize.INTEGER,
                defaultValue: 5,
            },
            note: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            targer: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            standardOutput: {
                type: Sequelize.STRING,
            },
            requireInput: {
                type: Sequelize.STRING,
            },
            status: {
                type: Sequelize.ENUM,
                values: ['REFUSE', 'ACCEPT', 'PENDING'],
            },
            lecturer_id: {
                type: Sequelize.INTEGER,
                references: { model: 'lecturers', key: 'id' },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('topics')
    },
}
