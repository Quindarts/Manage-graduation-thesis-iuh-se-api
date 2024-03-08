const Achievement = require('../../models/Achievement/achievement.model')
const Error = require('../../helper/errors/errors')

exports.getAllAchievement = async (req, res) => {
    try {
        const achievements = await Achievement.findAll()

        res.status(200).json({
            achievements,
        })
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.getAchievementById = async (req, res) => {
    try {
        const { id } = req.params

        const achievement = await Achievement.findAll({ where: { id } })
        if (achievement) {
            res.status(200).json({
                achievement,
            })
        } else {
            Error.sendNotFound(res, 'Achievement not found!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.createAchievement = async (req, res) => {
    try {
        const newAchievement = await Achievement.create(req.body)

        if (newAchievement) {
            res.status(200).json({
                achievement: newAchievement,
            })
        } else {
            Error.sendWarning(res, 'Create achievement failure!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.updateAchievement = async (req, res) => {
    try {
        const { id } = req.params
        const { name, description } = req.body
        const achievement = await Achievement.findAll({ where: { id } })
        if (achievement) {
            achievement.name = name
            achievement.description = description

            await achievement.save()
        } else {
            Error.sendNotFound(res, 'Achievement not found!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.deleteAchievement = async (req, res) => {
    try {
        const { id } = req.params
        const achievement = await Achievement.findAll({ where: { id } })
        if (achievement) {
            await achievement.destroy()
        } else {
            Error.sendNotFound(res, 'Achievement not found!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}
