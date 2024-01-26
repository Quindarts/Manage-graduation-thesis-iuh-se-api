'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    
    class achievement extends Model {
        static associate(models) {
            // define association here
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
