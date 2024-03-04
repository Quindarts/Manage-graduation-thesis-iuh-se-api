'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class major extends Model {
        static associate(models) {
            this.hasOne(models.user, {
                foreignKey: 'major_id',
                as: 'major',
            })
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
