'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class transcript extends Model {
        static associate(models) {
            // define association here
            this.hasOne(models.groupStudents, {
                foreignKey: 'id',
                as: 'groupStudents',
            })
            this.hasOne(models.groupLecturers, {
                foreignKey: 'id',
                as: 'groupLecturers',
            })
        }
    }
    transcript.init(
        {
            score: DataTypes.FLOAT,
            groupStudent_id: DataTypes.INTEGER,
            groupLecturer_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'transcript',
        }
    )
    return transcript
}
