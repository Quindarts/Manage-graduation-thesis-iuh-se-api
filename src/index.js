'use strict'
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const route = require('./router')
const { connectDB } = require('./config/connectDB')

const cloudinary = require('cloudinary').v2

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

app.use(express.json())

app.use(cors(corsOptions))

connectDB()

route(app)

const port = process.env.PORT || 3000
app.listen(port, () =>
    console.log('🚀> Server is up and running on port : ' + port)
)
