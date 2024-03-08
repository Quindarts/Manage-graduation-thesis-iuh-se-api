const express = require('express')

const { APP_ROUTER } = require('../constants/Router')

const {
    getAllAchievement,
    getAchievementById,
    createAchievement,
    updateAchievement,
    deleteAchievement,
} = require('../controller/Achievement/achievement.controller')

const router = express.Router()

router.get(APP_ROUTER.INDEX, getAllAchievement)

router.get(APP_ROUTER.ACHIEVEMENT_BY_ID, getAchievementById)

router.post(APP_ROUTER.INDEX, createAchievement)

router.put(APP_ROUTER.ACHIEVEMENT_BY_ID, updateAchievement)

router.delete(APP_ROUTER.ACHIEVEMENT_BY_ID, deleteAchievement)

module.exports = router
