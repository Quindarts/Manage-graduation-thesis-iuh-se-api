'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class topic extends Model {
        static associate(models) {
            // define association here
            this.hasMany(models.topicOfTerm, {
                foreignKey: 'topic_id',
                as: 'topic_topicOfTerm',
            })
        }
    }
    topic.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            groupQuantity: DataTypes.INTEGER,
            maxGroupQuantity: DataTypes.INTEGER,
            note: DataTypes.STRING,
            target: DataTypes.STRING,
            standardOutput: DataTypes.STRING,
            requireInput: DataTypes.STRING,
            status: DataTypes.STRING,
            lecturer_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'topic',
        }
    )
    return topic
}
