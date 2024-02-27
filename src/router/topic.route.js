const express = require('express')
const { APP_ROUTER } = require('../constants/Router')

const {
    getAllTopic,
    createTopic,
    updateTopic,
    deleteTopic,
} = require('../controller/Topic/topic.controller')

const router = express.Router()

router.get(APP_ROUTER.INDEX, getAllTopic)

router.post(APP_ROUTER.TOPIC_BY_ID, createTopic)

router.put(APP_ROUTER.TOPIC_BY_ID, updateTopic)

router.delete(APP_ROUTER.TOPIC_BY_ID, deleteTopic)

module.exports = router
