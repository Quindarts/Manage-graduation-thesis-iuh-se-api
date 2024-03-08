const express = require('express')
const { APP_ROUTER } = require('../constants/Router')

const {
    getAllStudent,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
} = require('../controller/Student/student.controller')

const router = express.Router()

router.get(APP_ROUTER.INDEX, getAllStudent)

router.get(APP_ROUTER.STUDENT_BY_ID, getStudentById)

router.post(APP_ROUTER.INDEX, createStudent)

router.put(APP_ROUTER.STUDENT_BY_ID, updateStudent)

router.delete(APP_ROUTER.STUDENT_BY_ID, deleteStudent)

module.exports = router
