'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class groupStudent extends Model {
        static associate(models) {
            // this.hasOne(models.lecturer, {
            //     foreignKey: 'id',
            //     as: 'lecturer',
            // })
            // this.hasOne(models.topic, {
            //     foreignKey: 'id',
            //     as: 'topic',
            // })
            // this.hasMany(models.achievement)
        }
    }
    groupStudent.init(
        {
            name: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            term_id: DataTypes.INTEGER,
            topic_id: DataTypes.INTEGER,
            achievement_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'groupStudent',
        }
    )
    return groupStudent
}
