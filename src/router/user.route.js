const express = require('express')
const { APP_ROUTER } = require('../constants/Router')

const { createUser, getAllUser } = require('../controller/User/user.controller')

const router = express.Router()

//[GET ALL USER]

//[GET USER]
router.get(APP_ROUTER.INDEX, getAllUser)
//[CREATE USER]
router.post(APP_ROUTER.INDEX, createUser)

module.exports = router
