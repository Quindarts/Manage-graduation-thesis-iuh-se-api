'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('groupLecturers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 'Nhóm giảng viên chấm đồ án',
            },
            quantity: {
                type: Sequelize.INTEGER,
                defaultValue: 2,
            },
            typeReport: {
                type: Sequelize.ENUM,
                values: ['COUNCIL', 'POSTER', 'REVIEWER'],
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
        await queryInterface.dropTable('groupLecturers')
    },
}
