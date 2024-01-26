'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class typeRoleLecturer extends Model {
        static associate(models) {
            // this.hasMany(models.lecturer, {
            //     through: 'lecturer_type_role',
            // })
        }
    }
    typeRoleLecturer.init(
        {
            roleName: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'typeRoleLecturer',
        }
    )
    return typeRoleLecturer
}
