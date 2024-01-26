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

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

async function uploadDemo() {
    const up = await cloudinary.uploader.upload(`./test/image.jpg`)
    return up
}

uploadDemo().then((result) => console.log(result))

app.listen(port, () =>
    console.log('🚀> Server is up and running on port : ' + port)
)
