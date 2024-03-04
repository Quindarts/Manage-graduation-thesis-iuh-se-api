'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class topicOfTerm extends Model {
        static associate(models) {
            this.belongsTo(models.term, {
                foreignKey: 'term_id',
                as: 'term_topicOfTerm',
            })
            this.hasOne(models.topic, {
                foreignKey: 'topic_id',
                as: 'topic_topicOfTerm',
            })
            this.hasOne(models.lecturer, {
                foreignKey: 'lecturer_id',
                as: 'lecturer_topicOfTerm',
            })
        }
    }
    topicOfTerm.init(
        {
            term_id: DataTypes.INTEGER,
            topic_id: DataTypes.INTEGER,
            lecturer_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'topicOfTerm',
        }
    )
    return topicOfTerm
}
