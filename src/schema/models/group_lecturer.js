'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class groupLecturer extends Model {
        static associate(models) {
            // define association here
            this.belongsToMany(models.lecturer, {
                through: 'group_lecturer_member',
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
