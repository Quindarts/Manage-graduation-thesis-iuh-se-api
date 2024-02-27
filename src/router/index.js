const { APP_ROUTER } = require('../constants/Router')
// const auth = require('./auth.route')
const user = require('./user.route')
const topic = require('./topic.route')

function router(app) {
    app.use(APP_ROUTER.USER, user)
    app.use(APP_ROUTER.TOPIC, topic)
}

module.exports = router
