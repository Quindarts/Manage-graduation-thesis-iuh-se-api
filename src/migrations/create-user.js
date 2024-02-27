'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            userName: {
                type: Sequelize.STRING,
                require: true,
                unique: true,
            },
            role_id : {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                require: true,
            },
            avatarUrl: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            phoneNumber: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            fullName: {
                type: Sequelize.STRING,
                require: true,
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
            },
            major_id: {
                type: Sequelize.INTEGER,
                require: true,
                // references: { model: 'majors', key: 'id' },
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
        await queryInterface.dropTable('users')
    },
}
