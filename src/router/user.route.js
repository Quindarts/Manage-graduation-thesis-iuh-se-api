const express = require('express')
const { APP_ROUTER } = require('../constants/Router')

const {
    createUser,
    getAllUser,
    updateUserById,
    deleteUserById,
} = require('../controller/User/user.controller')

const router = express.Router()

//[GET ALL USER]

router.get(APP_ROUTER.INDEX, getAllUser)

//[CREATE USER]
router.post(APP_ROUTER.INDEX, createUser)

//[UPDATE USER]
router.put(APP_ROUTER.USER_BY_ID, updateUserById)

//[DELETE USER]
router.delete(APP_ROUTER.USER_BY_ID, deleteUserById)

module.exports = router
