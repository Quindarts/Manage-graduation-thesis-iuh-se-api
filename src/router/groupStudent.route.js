const express = require('express')

const { APP_ROUTER } = require('../constants/Router')

const {
    getAllGroupStudent,
    getGroupStudentById,
    createGroupStudent,
    updateGroupStudent,
    deleteGroupStudent,
} = require('../controller/GroupStudent/groupStudent.controller')

const router = express.Router()

router.get(APP_ROUTER.INDEX, getAllGroupStudent)

router.get(APP_ROUTER.GROUP_BY_STUDENT_ID, getGroupStudentById)

router.post(APP_ROUTER.INDEX, createGroupStudent)

router.put(APP_ROUTER.GROUP_BY_STUDENT_ID, updateGroupStudent)

router.delete(APP_ROUTER.GROUP_BY_STUDENT_ID, deleteGroupStudent)

module.exports = router
