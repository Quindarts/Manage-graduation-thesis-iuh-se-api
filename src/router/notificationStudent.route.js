const express = require('express')

const { APP_ROUTER } = require('../constants/Router')

const {
    getAllNotificationStudentByStudentId,
    createNotificationStudent,
    updateNotificationStudent,
    deleteNotificationStudent,
} = require('../controller/NotificationStudent/notificationStudent.controller')

const router = express.Router()

router.get(APP_ROUTER.INDEX, getAllNotificationStudentByStudentId)

router.post(APP_ROUTER.INDEX, createNotificationStudent)

router.put(APP_ROUTER.NOTIFICATION_STUDENT_BY_ID, updateNotificationStudent)

router.delete(APP_ROUTER.NOTIFICATION_STUDENT_BY_ID, deleteNotificationStudent)

module.exports = router
