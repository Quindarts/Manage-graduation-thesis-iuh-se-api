'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class lecturer extends Model {
        static associate(models) {
            
            this.belongsTo(models.user, {
                foreignKey: 'user_id',
                as: 'user_lecturer',
            })
            this.hasMany(models.groupStudent, {
                foreignKey: 'lecture_id',
                as: 'lecturer',
            })
            this.hasMany(models.lecturerOfGroup, {
                foreignKey: 'lecturer_id',
                as: 'lecturerOfGroup',
            })
        }
    }
    lecturer.init(
        {
            role: DataTypes.STRING,
            typeRoleLecturer_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'lecturer',
        }
    )
    return lecturer
}
