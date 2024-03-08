const Student = require('../../schema/models/student')
const Error = require('../../helper/errors/errors')

exports.getAllStudent = async (req, res) => {
    try {
        const students = await Student.findAll()

        res.status(200).json({
            students,
        })
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.getStudentById = async (req, res) => {
    try {
        const { id } = req.params

        const student = await Student.findAll({ where: { id } })
        if (student) {
            res.status(200).json({
                student,
            })
        } else {
            Error.sendNotFound(res, 'Student not found!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.createStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body)

        if (newStudent) {
            res.status(200).json({
                student: newStudent,
            })
        } else {
            Error.sendWarning(res, 'Create student failure!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.updateStudent = async (req, res) => {
    try {
        const { id } = req.params
        const { typeTranning, groupStudent_id, user_id } = req.body
        const student = await Student.findAll({ where: { id } })
        if (student) {
            student.typeTranning = typeTranning
            student.groupStudent_id = groupStudent_id
            student.user_id = user_id

            await student.save()
        } else {
            Error.sendWarning(res, 'Student not found!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params

        const student = await Student.findAll({ where: { id } })
        if (student) {
            await student.destroy()
        } else {
            Error.sendWarning(res, 'Student not found!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}
