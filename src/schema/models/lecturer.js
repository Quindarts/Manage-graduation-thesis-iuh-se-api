'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class lecturer extends Model {
        static associate(models) {
            // this.hasOne(models.user, {
            //     foreignKey: 'id',
            //     as: 'user',
            // })

            // this.hasMany(models.groupLecturer, {
            //     through: 'group_lecturer_member',
            // })

            // this.hasMany(models.typeRoleLecturer, {
            //     through: 'lecturer_type_role',
            // })
        }
    }
    lecturer.init(
        {
            role: DataTypes.STRING,
            typeRoleLecturer_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'lecturer',
        }
    )
    return lecturer
}
