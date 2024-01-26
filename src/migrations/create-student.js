'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('students', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            typeTranning: {
                type: Sequelize.ENUM,
                values: ['COLLEGE', 'UNIVERSITY'],
                defaultValue: 'UNIVERSITY',
            },
            user_id: {
                type: Sequelize.INTEGER,
                require: true,
                // references: { model: 'users', key: 'id' },
            },
            groupStudent_id: {
                type: Sequelize.INTEGER,
                // references: { model: 'groupStudents', key: 'id' },
                allowNull: true,
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
        await queryInterface.dropTable('students')
    },
}
