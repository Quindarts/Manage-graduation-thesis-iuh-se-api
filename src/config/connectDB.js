const { Sequelize } = require('sequelize')
require('dotenv').config()

const env = 'development'
const config = require('./config')[env]

const db = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: 3306,
    dialect: config.dialect,
    logging: config.logging,
    timezone: '+07:00',
})

let connectDB = async () => {
    try {
        await db.authenticate()
        console.log('🚀 ~ connectDB ~  Connection has been successfully.')
    } catch (error) {
        console.error(
            '🚀 ~ connectDB ~  Unable to connect to the database:',
            error
        )
    }
}
module.exports = { connectDB, db }
