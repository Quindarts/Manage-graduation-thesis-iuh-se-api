'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class transcript extends Model {
        static associate(models) {
            // define association here
        }
    }
    transcript.init(
        {
            score: DataTypes.FLOAT,
            groupStudent_id: DataTypes.INTEGER,
            groupLecturer_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'transcript',
        }
    )
    return transcript
}
