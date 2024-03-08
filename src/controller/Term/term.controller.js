const Term = require('../../models/Term/term.model')
const Error = require('../../helper/errors/errors')

exports.getAllTerm = async (req, res) => {
    try {
        const terms = await Term.findAll()

        res.status(200).json({
            terms,
        })
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.getTermById = async (req, res) => {
    try {
        const { id } = req.params

        const term = await Term.findAll({ where: { id } })
        if (term) {
            res.status(200).json({
                term,
            })
        } else {
            Error.sendNotFound(res, 'Term not found!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.createTerm = async (req, res) => {
    try {
        const newTerm = await Term.create(req.body)

        if (newTerm) {
            res.status(200).json({
                term: newTerm,
            })
        } else {
            Error.sendWarning(res, 'Create term failure!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.updateTerm = async (req, res) => {
    try {
        const { id } = req.params
        const { name, description } = req.body
        const term = await Term.findAll({ where: { id } })
        if (term) {
            term.name = name
            term.description = description

            await term.save()
        } else {
            Error.sendNotFound(res, 'Term not found!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}

exports.deleteTerm = async (req, res) => {
    try {
        const { id } = req.params
        const term = await Term.findAll({ where: { id } })
        if (term) {
            await term.destroy()
            res.status(200).json({
                message: 'Delete term success!',
            })
        } else {
            Error.sendNotFound(res, 'Term not found!')
        }
    } catch (error) {
        Error.sendError(res, error)
    }
}
