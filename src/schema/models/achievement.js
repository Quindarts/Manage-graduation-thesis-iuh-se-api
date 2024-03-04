'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class achievement extends Model {
        static associate(models) {
            this.hasOne(models.groupStudent, {
                foreignKey: 'achievement_id',
                as: 'achievement',
            })
        }
    }

    achievement.init(
        {
            name: DataTypes.STRING,
            desciption: DataTypes.STRING,
            score: DataTypes.FLOAT,
        },
        {
            sequelize,
            modelName: 'achievement',
        }
    )
    return achievement
}
