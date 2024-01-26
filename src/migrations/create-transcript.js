'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('transcripts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            score: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
            },
            groupStudent_id: {
                type: Sequelize.INTEGER,
                references: { model: 'groupStudents', key: 'id' },
            },
            groupLecturer_id: {
                type: Sequelize.INTEGER,
                references: { model: 'groupgroupLecturers', key: 'id' },
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
        await queryInterface.dropTable('transcripts')
    },
}
