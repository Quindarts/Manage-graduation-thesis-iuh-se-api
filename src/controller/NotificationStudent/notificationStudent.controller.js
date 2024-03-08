const notficationStudent = require('../../model/NotificationStudent/notificationStudent.model')
const Error = require('../../helper/errors/errors')

// get all notification student by student id

exports.getAllNotificationStudentByStudentId = async (req, res) => {
    try {
        const { student_id } = req.params

        const notificationStudent = await notficationStudent.findAll({
            where: { student_id },
        })

        if (notificationStudent) {
            res.status(200).json({
                notificationStudent,
            })
        } else {
            Error.sendNotFound(res, 'NotificationStudent not found!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

// create notification student
exports.createNotificationStudent = async (req, res) => {
    try {
        const newNotificationStudent = await notficationStudent.create(req.body)

        if (newNotificationStudent) {
            res.status(200).json({
                notificationStudent: newNotificationStudent,
            })
        } else {
            Error.sendWarning(res, 'Create notificationStudent failure!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

// update notification student of student with read status
exports.updateNotificationStudent = async (req, res) => {
    try {
        const { id } = req.params

        const notificationStudent = await notficationStudent.findAll({
            where: { id },
        })

        if (notificationStudent) {
            notificationStudent.read_status = true

            await notificationStudent.save()
        } else {
            Error.sendNotFound(res, 'NotificationStudent not found!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

// delete notification student of student
exports.deleteNotificationStudent = async (req, res) => {
    try {
        const { id } = req.params

        const notificationStudent = await notficationStudent.findAll({
            where: { id },
        })

        if (notificationStudent) {
            await notificationStudent.destroy()
        } else {
            Error.sendNotFound(res, 'NotificationStudent not found!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}
