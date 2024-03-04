const db = require('../../schema/models')
const Error = require('../../helper/errors/errors')
const { HTTP_STATUS } = require('../../constants/contanst')

//[GET-ALL-USER]
const getAllUser = async (req, res) => {
    try {
        const listUser = await db.user.findAll({
            include: [
                {
                    model: db.major,
                    as: 'major',
                    attributes: ['name'],
                },
                {
                    model: db.role,
                    as: 'role',
                    attributes: ['rolename'],
                },
            ],
        })
        if (!listUser) {
            return Error.sendNotFound(res, 'No list user found.')
        }
        return res.status(HTTP_STATUS.OK).json({
            success: true,
            status: HTTP_STATUS.OK,
            message: 'Get all user success',
            list: listUser,
        })
    } catch (error) {
        console.log('🚀 ~ getAllUser ~ error:', error)

        return Error.sendError(res, error)
    }
}

//[CREATE-USER]
const createUser = async (req, res) => {
    const { userName, password, phoneNumber, fullName, major_id, role_id } =
        req.body

    try {
        const oldUser = await db.user.findOne({ where: { userName } })

        if (oldUser) {
            return Error.sendConflict(res, 'This user aready exits.')
        }

        const newUser = await db.user.create({
            userName: userName,
            password: password,
            phoneNumber: phoneNumber,
            fullName: fullName,
            major_id: major_id,
            role_id: role_id,
        })
        if (!newUser) {
            return Error.sendNotFound(res, 'Failed to create new user')
        }
        res.status(HTTP_STATUS.CREATED).json({
            success: true,
            status: HTTP_STATUS.CREATED,
            message: 'Create user success.',
            user: newUser,
        })
    } catch (error) {
        console.log('🚀 ~ createUser ~ error:', error)
        return Error.sendError(res, error)
    }
}

//[UPATE USER] /:id
const updateUserById = async (req, res) => {
    try {
        const { id } = req.params
        const {
            userName,
            password,
            phoneNumber,
            fullName,
            major_id,
            role_id,
            avatarUrl,
            isActive,
        } = req.body

        const updateUser = await db.user.update(
            {
                userName: userName,
                password: password,
                phoneNumber: phoneNumber,
                fullName: fullName,
                major_id: major_id,
                role_id: role_id,
                avatarUrl: avatarUrl,
                isActive: isActive,
            },
            {
                where: {
                    id: id,
                },
            }
        )
        const returnUser = await db.user.findOne({ where: { id } })
        if (!updateUser) {
            return Error.sendNotFound('Update user not found')
        }
        return res.status(HTTP_STATUS.OK).json({
            success: true,
            status: HTTP_STATUS.OK,
            message: 'Update user success.',
            user: returnUser,
        })
    } catch (error) {
        console.log('🚀 ~ updateUserById ~ error:', error)
        return Error.sendError(res, error)
    }
}
//[DELETE] :id
const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params
        const resultDeleteUser = await db.user.destroy({ where: { id } })
        if (!resultDeleteUser) {
            return Error.sendNotFound('Delete user not found')
        }
        return res.status(HTTP_STATUS.OK).json({
            success: true,
            status: HTTP_STATUS.OK,
            message: 'Delete user success.',
        })
    } catch (error) {
        console.log('🚀 ~ deleteUserById ~ error:', error)
        return Error.sendError(res, error)
    }
}
module.exports = {
    createUser,
    getAllUser,
    updateUserById,
    deleteUserById,
}
