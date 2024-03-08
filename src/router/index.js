const { APP_ROUTER } = require('../constants/Router')
const user = require('./user.route')
const topic = require('./topic.route')
const major = require('./major.route')
const auth = require('./auth.route')
const student = require('./student.route')
const groupStudent = require('./groupStudent.route')
const notificationStudent = require('./notificationStudent.route')

function router(app) {
    app.use(APP_ROUTER.USER, user)
    app.use(APP_ROUTER.TOPIC, topic)
    app.use(APP_ROUTER.MAJORS, major)
    app.use(APP_ROUTER.AUTH, auth)
    app.use(APP_ROUTER.STUDENT, student)
    app.use(APP_ROUTER.GROUP_STUDENT, groupStudent)
    app.use(APP_ROUTER.NOTIFICATION_STUDENT, notificationStudent)
}

module.exports = router
