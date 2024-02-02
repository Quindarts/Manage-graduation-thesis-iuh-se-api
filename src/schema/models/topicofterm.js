'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class topicOfTerm extends Model {
        static associate(models) {
            this.hasOne(models.term, {
                foreignKey: 'id',
                as: 'term_topicOfTerm',
            })
            this.hasOne(models.topic, {
                foreignKey: 'id',
                as: 'topic_topicOfTerm',
            })
        }
    }
    topicOfTerm.init(
        {
            term_id: DataTypes.INTEGER,
            topic_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'topicOfTerm',
        }
    )
    return topicOfTerm
}
