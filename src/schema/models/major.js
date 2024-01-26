'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class major extends Model {
        static associate(models) {
            // define association here
        }
    }
    major.init(
        {
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'major',
        }
    )
    return major
}
