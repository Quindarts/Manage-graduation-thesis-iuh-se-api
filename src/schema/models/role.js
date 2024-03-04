'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class role extends Model {
        static associate(models) {
            this.hasMany(models.user, {
                foreignKey: 'role_id',
                as: 'role',
            })
            this.hasMany(models.featureList, {
                foreignKey: 'role_id',
                as: 'featureList',
            })
        }
    }
    role.init(
        {
            rolename: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'role',
        }
    )
    return role
}
