'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class groupStudent extends Model {
        static associate(models) {
            this.belongsTo(models.lecturer, {
                foreignKey: 'lecture_id',
                as: 'lecturer',
            })
            this.belongsTo(models.topic, {
                foreignKey: 'topic_id',
                as: 'topic',
            })
            this.belongsTo(models.achievement, {
                foreignKey: 'achievement_id',
                as: 'achievement',
            })
            this.belongsTo(models.term, {
                foreignKey: 'term_id',
                as: 'term',
            })
        }
    }
    groupStudent.init(
        {
            name: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            term_id: DataTypes.INTEGER,
            topic_id: DataTypes.INTEGER,
            achievement_id: DataTypes.INTEGER,
            lecture_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'groupStudent',
        }
    )
    return groupStudent
}
