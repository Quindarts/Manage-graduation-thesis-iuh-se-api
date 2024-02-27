const Topic = require('../../schema/models/topic')
const Error = require('../../helper/errors/errors')

exports.getAllTopic = async (req, res) => {
    try {
        const topics = await Topic.findAll()

        res.status(200).json({
            topics,
        })
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.createTopic = async (req, res) => {
    try {
        const newTopic = await Topic.create(req.body)

        if (newTopic) {
            res.status(200).json({
                topic: newTopic,
            })
        } else {
            Error.sendWarning(res, 'Create topic failure!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.updateTopic = async (req, res) => {
    try {
        const { id } = req.params
        const {
            name,
            description,
            groupQuantity,
            maxGroupQuantity,
            note,
            target,
            standardOutput,
            requireInput,
            status,
        } = req.body

        const topic = await Topic.findAll({ where: { id } })
        if (topic) {
            topic.name = name
            topic.description = description
            topic.groupQuantity = groupQuantity
            topic.maxGroupQuantity = maxGroupQuantity
            topic.note = note
            topic.target = target
            topic.standardOutput = standardOutput
            topic.requireInput = requireInput
            topic.status = status

            await topic.save()

            res.json(200).json({ topic })
        } else {
            Error.sendNotFound(res, "Topic doesn't exist")
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.deleteTopic = async (req, res) => {
    try {
        const { id } = req.params

        await Topic.destroy({ where: { id } })

        res.status(200).json()
    } catch (error) {
        Error.sendError(res, error)
    }
}
