'use strict'
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const route = require('./router')
const { connectDB } = require('./config/connectDB')
const { encryptedPassword } = require('./helper/crypto/cryptos')

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

app.use(express.json())

app.use(cors(corsOptions))

connectDB()

route(app)

const port = process.env.PORT || 5000
app.listen(port, () =>
    console.log('🚀> Server is up and running on port : ' + port)
)
