const GroupStudent = require('../../models/GroupStudent/groupStudent.model')
const Error = require('../../helper/errors/errors')

exports.getAllGroupStudent = async (req, res) => {
    try {
        const groupStudents = await GroupStudent.findAll()

        res.status(200).json({
            groupStudents,
        })
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.getGroupStudentById = async (req, res) => {
    try {
        const { id } = req.params

        const groupStudent = await GroupStudent.findAll({ where: { id } })
        if (groupStudent) {
            res.status(200).json({
                groupStudent,
            })
        } else {
            Error.sendNotFound(res, 'GroupStudent not found!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.createGroupStudent = async (req, res) => {
    try {
        const newGroupStudent = await GroupStudent.create(req.body)

        if (newGroupStudent) {
            res.status(200).json({
                groupStudent: newGroupStudent,
            })
        } else {
            Error.sendWarning(res, 'Create groupStudent failure!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.updateGroupStudent = async (req, res) => {
    try {
        const { id } = req.params
        const { name, major_id } = req.body
        const groupStudent = await GroupStudent.findAll({ where: { id } })
        if (groupStudent) {
            groupStudent.name = name
            groupStudent.major_id = major_id

            await groupStudent.save()
        } else {
            Error.sendNotFound(res, 'GroupStudent not found!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.deleteGroupStudent = async (req, res) => {
    try {
        const { id } = req.params
        const groupStudent = await GroupStudent.findAll({ where: { id } })
        if (groupStudent) {
            await groupStudent.destroy()
            res.status(200).json({
                message: 'Delete groupStudent success!',
            })
        } else {
            Error.sendNotFound(res, 'GroupStudent not found!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}
