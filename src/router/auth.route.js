const express = require('express')
const { APP_ROUTER } = require('../constants/Router')
const {
    login,
    register,
} = require('../controller/Auth/authentication.controller')

const router = express.Router()

//[POST] LOGIN ACCOUNT
router.post(APP_ROUTER.LOGIN, login)
router.post(APP_ROUTER.REGISTER, register)

module.exports = router
