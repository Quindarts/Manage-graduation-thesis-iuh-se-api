'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('groupStudents', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 'Nhóm sinh viên đồ án',
            },
            quantity: {
                type: Sequelize.INTEGER,
            },
            term_id: {
                type: Sequelize.INTEGER,
                // references: { model: 'terms', key: 'id' },
            },
            lecture_id: {
                type: Sequelize.INTEGER,
                // references: { model: 'lecturers', key: 'id' },
            },
            topic_id: {
                type: Sequelize.INTEGER,
                // references: { model: 'topics', key: 'id' },
            },
            achievement_id: {
                type: Sequelize.INTEGER,
                // references: { model: 'achievements', key: 'id' },
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
        await queryInterface.dropTable('groupStudents')
    },
}
