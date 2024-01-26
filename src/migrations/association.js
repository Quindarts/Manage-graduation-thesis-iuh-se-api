'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addConstraint('groupStudents', {
            fields: ['term_id'],
            type: 'foreign key',
            name: 'groupStudents_term_association',
            references: {
                table: 'terms',
                field: 'id',
            },
        })
        await queryInterface.addConstraint('groupStudents', {
            fields: ['lecture_id'],
            type: 'foreign key',
            name: 'groupStudents_lecturer_association',
            references: {
                table: 'lecturers',
                field: 'id',
            },
        })
        await queryInterface.addConstraint('groupStudents', {
            fields: ['topic_id'],
            type: 'foreign key',
            name: 'groupStudents_topic_association',
            references: {
                table: 'topics',
                field: 'id',
            },
        })
        await queryInterface.addConstraint('groupStudents', {
            fields: ['achievement_id'],
            type: 'foreign key',
            name: 'groupStudents_achievement_association',
            references: {
                table: 'achievements',
                field: 'id',
            },
        }),
            await queryInterface.addConstraint('lecturers', {
                fields: ['typeRoleLecturer_id'],
                type: 'foreign key',
                name: 'lecturer_typeRoleLecturer_association',
                references: {
                    table: 'typeRoleLecturers',
                    field: 'id',
                },
            }),
            await queryInterface.addConstraint('lecturers', {
                fields: ['user_id'],
                type: 'foreign key',
                name: 'lecturer_achievement_association',
                references: {
                    table: 'users',
                    field: 'id',
                },
            }),
            await queryInterface.addConstraint('students', {
                fields: ['user_id'],
                type: 'foreign key',
                name: 'student_user_association',
                references: {
                    table: 'users',
                    field: 'id',
                },
            }),
            await queryInterface.addConstraint('students', {
                fields: ['groupStudent_id'],
                type: 'foreign key',
                name: 'student_groupStudent_association',
                references: {
                    table: 'groupStudents',
                    field: 'id',
                },
            }),
            await queryInterface.addConstraint('transcripts', {
                fields: ['groupStudent_id'],
                type: 'foreign key',
                name: 'transcript_groupStudent_association',
                references: {
                    table: 'groupStudents',
                    field: 'id',
                },
            }),
            await queryInterface.addConstraint('transcripts', {
                fields: ['groupLecturer_id'],
                type: 'foreign key',
                name: 'transcript_groupLecturer_association',
                references: {
                    table: 'groupLecturers',
                    field: 'id',
                },
            }),
            await queryInterface.addConstraint('users', {
                fields: ['major_id'],
                type: 'foreign key',
                name: 'user_major_association',
                references: {
                    table: 'majors',
                    field: 'id',
                },
            })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint('groupStudents', {
            fields: ['term_id'],
            type: 'foreign key',
            name: 'groupStudents_term_association',
            references: {
                table: 'terms',
                field: 'id',
            },
        })
        await queryInterface.removeConstraint('groupStudents', {
            fields: ['lecture_id'],
            type: 'foreign key',
            name: 'groupStudents_lecturer_association',
            references: {
                table: 'lecturers',
                field: 'id',
            },
        })
    },
}
