'use strict'
const { Model } = require('sequelize')
const user = require('./user')

module.exports = (sequelize, DataTypes) => {
    class student extends Model {
        static associate(models) {

            this.belongsTo(models.user, {
                foreignKey: 'user_id',
                as: 'user',
            })

            this.hasOne(models.groupStudent, {
                foreignKey: 'groupStudent_id',
                as: 'groupStudent',
            })
        }
    }
    student.init(
        {
            typeTranning: DataTypes.STRING,
            groupStudent_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'student',
        }
    )
    return student
}
