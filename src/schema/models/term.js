'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class term extends Model {
        static associate(models) {
            // define association here
            this.belongsToMany(models.groupStudents)
        }
    }
    term.init(
        {
            name: DataTypes.STRING,
            schoolYear: DataTypes.STRING,
            startDate: DataTypes.DATE,
            endDate: DataTypes.DATE,
            isGroupRegister: DataTypes.BOOLEAN,
            isTopicRegister: DataTypes.BOOLEAN,
            isPublicResult: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'term',
        }
    )
    return term
}
