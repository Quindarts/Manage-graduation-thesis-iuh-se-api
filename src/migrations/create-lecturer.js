'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('lecturers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            typeRoleLecturer_id: {
                type: Sequelize.INTEGER,
                require: true,
                // references: { model: 'typeRoleLecturers', key: 'id' },
            },

            groupLecturer_id: {
                type: Sequelize.INTEGER,
                // references: { model: 'groupLecturers', key: 'id' },
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
        await queryInterface.dropTable('lecturers')
    },
}
