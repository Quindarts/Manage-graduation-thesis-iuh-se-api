'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class lecturerOfGroup extends Model {
        static associate(models) {
            this.hasOne(models.lecturer, {
                foreignKey: 'id',
                as: 'lecturer_lecturerOfGroup',
            })
            this.hasOne(models.groupLecturer, {
                foreignKey: 'id',
                as: 'groupLecturer_lecturerOfGroup',
            })
        }
    }
    lecturerOfGroup.init(
        {
            lecturer_id: DataTypes.INTEGER,
            groupLecturer_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'lecturerOfGroup',
        }
    )
    return lecturerOfGroup
}
