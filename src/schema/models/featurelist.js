'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class featureList extends Model {
        static associate(models) {
            // define association here
            this.belongsTo(models.role, {
                foreignKey: 'role_id',
                as: 'role',
            })
        }
    }
    featureList.init(
        {
            featureName: DataTypes.STRING,
            role_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'featureList',
        }
    )
    return featureList
}
