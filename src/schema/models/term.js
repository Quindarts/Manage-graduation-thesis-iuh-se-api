'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class term extends Model {
        static associate(models) {
            // define association here
            this.hasMany(models.groupStudent, {
                foreignKey: 'term_id',
                as: 'term',
            })
            this.hasMany(models.topicOfTerm, {
                foreignKey: 'term_id',
                as: 'term_topicOfTerm',
            })
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
