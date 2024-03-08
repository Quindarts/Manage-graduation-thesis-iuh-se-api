const express = require('express')
const { APP_ROUTER } = require('../constants/Router')
const {
    createMajor,
    getAllMajor,
    updateMajorById,
    deleteMajorById,
} = require('../controller/Major/major.controller')

const router = express.Router()

//[GET ALL MAJOR]
router.get(APP_ROUTER.INDEX, getAllMajor)

//[CREATE MAJOR]
router.post(APP_ROUTER.INDEX, createMajor)

//[UPDATE MAJOR]
router.put(APP_ROUTER.MAJORS_BY_ID, updateMajorById)

//[DELETE MAJOR]
router.delete(APP_ROUTER.MAJORS_BY_ID, deleteMajorById)

module.exports = router
