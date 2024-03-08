const { APP_ROUTER } = require('../constants/Router')
const user = require('./user.route')
const topic = require('./topic.route')
const major = require('./major.route')
const auth = require('./auth.route')
const student = require('./student.route')
const groupStudent = require('./groupStudent.route')

function router(app) {
    app.use(APP_ROUTER.USER, user)
    app.use(APP_ROUTER.TOPIC, topic)
    app.use(APP_ROUTER.MAJORS, major)
    app.use(APP_ROUTER.AUTH, auth)
    app.use(APP_ROUTER.STUDENT, student)
    app.use(APP_ROUTER.GROUP_STUDENT, groupStudent)
}

module.exports = router
