const db = require('../../schema/models')
const Error = require('../../helper/errors/errors')
const { HTTP_STATUS } = require('../../constants/contanst')

//[GET-ALL-major]
const getAllMajor = async (req, res) => {
    try {
        const listMajor = await db.major.findAll()
        if (!listMajor) {
            return Error.sendNotFound(res, 'No list major found.')
        }
        return res.status(HTTP_STATUS.OK).json({
            success: true,
            status: HTTP_STATUS.OK,
            message: 'Get all major success',
            list: listMajor,
        })
    } catch (error) {
        console.log('🚀 ~ getAllmajor ~ error:', error)
        return Error.sendError(res, error)
    }
}

//[CREATE-major]
const createMajor = async (req, res) => {
    const { name } = req.body

    try {
        const oldmajor = await db.major.findOne({ where: { name } })

        if (oldmajor) {
            return Error.sendConflict(res, 'This major aready exits.')
        }

        const newmajor = await db.major.create({ name })
        if (!newmajor) {
            return Error.sendNotFound(res, 'Failed to create new major')
        }
        res.status(HTTP_STATUS.CREATED).json({
            success: true,
            status: HTTP_STATUS.CREATED,
            message: 'Create major success.',
            major: newmajor,
        })
    } catch (error) {
        console.log('🚀 ~ createmajor ~ error:', error)
        return Error.sendError(res, error)
    }
}

//[UPATE major] /:id
const updateMajorById = async (req, res) => {
    try {
        const { id } = req.params
        const { name } = req.body

        const updatemajor = await db.major.update(
            {
                name: name,
            },
            {
                where: {
                    id: id,
                },
            }
        )
        const returnMajor = await db.major.findOne({ where: { id } })

        if (!updatemajor) {
            return Error.sendNotFound('Update major not found')
        }
        return res.status(HTTP_STATUS.OK).json({
            success: true,
            status: HTTP_STATUS.OK,
            message: 'Update major success.',
            major: returnMajor,
        })
    } catch (error) {
        console.log('🚀 ~ updateMajorById ~ error:', error)
        return Error.sendError(res, error)
    }
}
//[DELETE] :id
const deleteMajorById = async (req, res) => {
    try {
        const { id } = req.params
        const resultDeletemajor = await db.major.destroy({ where: { id } })
        if (!resultDeletemajor) {
            return Error.sendNotFound('Delete major not found')
        }
        return res.status(HTTP_STATUS.OK).json({
            success: true,
            status: HTTP_STATUS.OK,
            message: 'Delete major success.',
        })
    } catch (error) {
        console.log('🚀 ~ deletemajorById ~ error:', error)
        return Error.sendError(res, error)
    }
}
module.exports = {
    createMajor,
    getAllMajor,
    updateMajorById,
    deleteMajorById,
}
