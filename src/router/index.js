const { APP_ROUTER } = require('../constants/Router')
const user = require('./user.route')
const topic = require('./topic.route')
const major = require('./major.route')

function router(app) {
    app.use(APP_ROUTER.USER, user)
    app.use(APP_ROUTER.TOPIC, topic)
    app.use(APP_ROUTER.MAJORS, major)
}

module.exports = router
