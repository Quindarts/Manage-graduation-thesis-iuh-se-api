'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        static associate(models) {
            this.belongsTo(models.major, {
                foreignKey: 'major_id',
                as: 'major',
            })

            this.belongsTo(models.role, {
                foreignKey: 'role_id',
                as: 'role',
            })
            this.hasOne(models.student, {
                foreignKey: 'user_id',
                as: 'user',
            })
            this.hasOne(models.lecturer, {
                foreignKey: 'user_id',
                as: 'user_lecturer',
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
            role_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'user',
        }
    )
    return user
}
