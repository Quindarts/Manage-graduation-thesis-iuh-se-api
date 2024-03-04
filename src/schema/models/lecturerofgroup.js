'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class lecturerOfGroup extends Model {
        static associate(models) {

            this.belongsTo(models.lecturer, {
                foreignKey: 'lecturer_id',
                as: 'lecturer_lecturerOfGroup',
            })
            this.belongsTo(models.groupLecturer, {
                foreignKey: 'groupLecturer_id',
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
