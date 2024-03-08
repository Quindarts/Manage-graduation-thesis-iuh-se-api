const db = require('../../schema/models')
const Error = require('../../helper/errors/errors')
const { HTTP_STATUS } = require('../../constants/contanst')
const jwtHelper = require('../../helper/jwt/jwt')
const crypto = require('../../helper/crypto/cryptos')

//[POST LOGIN ]
const login = async (req, res) => {
    const { userName, password, remmber } = req.body
    var refreshToken = ''
    try {
        //Checked Username
        const user = await db.user.findOne({
            where: { userName: userName },
        })
        if (!user) {
            return Error.sendNotFound(res, 'Username or Password not found')
        } else {
            //Checked Password
            const decPassword = crypto.decryptedPassword(user.password)

            if (decPassword !== password) {
                return Error.sendNotFound(res, 'Password not found')
            }

            //Checked Active
            if (!user.isActive) {
                Error.sendUnauthenticated(res)
            }

            //Checked RefreshToken
            if (refreshToken === '') {
                refreshToken = jwtHelper.generateToken(
                    'refresh',
                    { id: user.id, dateCreated: Date.now },
                    '30000h'
                )
            } else {
                refreshToken = req.headers['authorization'].replace(
                    'Bearer ',
                    ''
                )
            }

            const accessToken = jwtHelper.generateToken(
                'access',
                { id: user.id },
                remmber ? '24h' : '1h'
            )

            res.status(HTTP_STATUS.OK).json({
                success: true,
                status: HTTP_STATUS.OK,
                message: 'Login Success',
                user: {
                    id: user.id,
                    userName: user.userName,
                    fullName: user.fullName,
                    phoneNumber: user.phoneNumber,
                    avatarUrl: user.avatarUrl,
                    major_id: user.major_id,
                    role_id: user.role_id,
                    role: user.role,
                    email: user.email,
                    isActive: user.isActive,
                },
                tokenList: {
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                },
            })
        }
    } catch (error) {
        console.log(error)
        Error.sendError(error)
    }
}

//[POST REGISTER]
const register = async (req, res) => {
    try {
        const {
            email,
            userName,
            password,
            fullName,
            major_id,
            phoneNumber,
            role_id,
        } = req.body

        const oldUser = await db.user.findOne({
            where: { userName },
        })

        //Check isEmpty user
        if (oldUser) {
            return Error.sendConflict(res, 'User Already Exist. Please Login')
        }

        const encryptedPassword = crypto.encryptedPassword(password)

        const newUser = await db.user.create({
            userName,
            password: encryptedPassword,
            fullName,
            major_id,
            role_id: role_id,
            phoneNumber,
        })

        const accessToken = jwtHelper.generateToken(
            'access',
            { id: newUser._id, dateCreated: Date.now },
            '1h'
        )
        const refreshToken = jwtHelper.generateToken(
            'refresh',
            { id: newUser._id, dateCreated: Date.now },
            '30000h'
        )
        // const signatureRefreshToken = jwtHelper.signatureToken(refreshToken)

        // const oldRefreshToken = await RefreshToken.findOne({
        //     value: signatureRefreshToken,
        // }).lean()

        // //Check oldRefreshToken
        // if (oldRefreshToken) {
        // }

        // const newRefreshToken = await RefreshToken.create({
        //     signatureRefreshToken,
        // })

        return res.status(HTTP_STATUS.CREATED).json({
            success: true,
            status: HTTP_STATUS.CREATED,
            message: 'Register Success',
            user: {
                userName,
                fullName,
                major_id,
                role_id: role_id,
                phoneNumber,
            },
            tokenList: {
                accessToken,
                refreshToken,
            },
        })
    } catch (error) {
        console.log('🚀 ~ register ~ error:', error)
        Error.sendError(res, error)
    }
}
module.exports = { login, register }
