'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class student extends Model {
        static associate(models) {
            this.hasOne(models.user, {
                foreignKey: 'id',
                as: 'user',
            })
            this.hasOne(models.groupStudent, {
                foreignKey: 'id',
                as: 'groupStudent',
            })
        }
    }
    student.init(
        {
            typeTranning: DataTypes.STRING,
            groupStudent_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'student',
        }
    )
    return student
}
