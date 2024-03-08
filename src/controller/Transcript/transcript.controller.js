const Transcript = require('../../model/Transcript/transcript.model')
const Error = require('../../helper/errors/errors')

// get all transcript by group student id
exports.getAllTranscriptByGroupStudentId = async (req, res) => {
    try {
        const { group_student_id } = req.params
        const transcripts = await Transcript.findAll({
            where: { group_student_id },
        })
        res.status(200).json({
            transcripts,
        })
    } catch (error) {
        Error.sendError(res, error)
    }
}

// create transcript
exports.createTranscript = async (req, res) => {
    try {
        const newTranscript = await Transcript.create(req.body)
        if (newTranscript) {
            res.status(200).json({
                transcript: newTranscript,
            })
        } else {
            Error.sendWarning(res, 'Create transcript failure!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

// update transcript
exports.updateTranscript = async (req, res) => {
    try {
        const { id } = req.params
        const updatedTranscript = await Transcript.update(req.body, {
            where: { id },
        })
        if (updatedTranscript) {
            res.status(200).json({
                transcript: updatedTranscript,
            })
        } else {
            Error.sendWarning(res, 'Update transcript failure!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

// delete transcript
exports.deleteTranscript = async (req, res) => {
    try {
        const { id } = req.params
        const deletedTranscript = await Transcript.destroy({ where: { id } })
        if (deletedTranscript) {
            res.status(200).json({
                transcript: deletedTranscript,
            })
        } else {
            Error.sendWarning(res, 'Delete transcript failure!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}
