'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class groupLecturer extends Model {
        static associate(models) {
            // define association here
            this.hasMany(models.lecturer, {
                foreignKey: 'groupLecturer_id',
                as: 'lecturer',
            })
            this.hasMany(models.lecturer, {
                foreignKey: 'groupLecturer_id',
                as: 'transcript',
            })
        }
    }
    groupLecturer.init(
        {
            name: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            typeReport: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'groupLecturer',
        }
    )
    return groupLecturer
}
