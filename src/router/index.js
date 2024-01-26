const { APP_ROUTER } = require('../constants/Router')
// const auth = require('./auth.route')
const user = require('./user.route')

function router(app) {
    app.use(APP_ROUTER.USER, user)
}

module.exports = router
