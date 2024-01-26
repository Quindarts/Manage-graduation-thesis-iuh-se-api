'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        static associate(models) {
            this.hasOne(models.major, {
                foreignKey: 'id',
                as: 'major',
            })
        }
    }
    user.init(
        {
            userName: DataTypes.STRING,
            password: DataTypes.STRING,
            avatarUrl: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
            fullName: DataTypes.STRING,
            isActive: DataTypes.BOOLEAN,
            major_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'user',
        }
    )
    return user
}
