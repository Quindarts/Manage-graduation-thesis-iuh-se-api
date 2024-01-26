const db = require('../../schema/models')

//[GET-ALL-USER]
const getAllUser = async (req, res) => {
    const user = await db.user.findAll({
        include: [
            {
                model: db.major,
                as: 'major',
                attributes: ['name'],
            },
        ],
    })
    console.log('🚀 ~ getAllUser ~ user:', user)
    res.status(200).json({
        user,
    })
}

//[CREATE-USER]
const createUser = async (req, res) => {
    try {
        const newUser = await db.user.create({
            userName: '21089141',
            password: '123456',
            phoneNumber: '0364835692',
            fullName: 'Lê Minh Quang',
            major_id: 1,
        })
        console.log('🚀 ~ createUser ~ newUser:', newUser)
        res.json(newUser)
    } catch (error) {
        console.log('🚀 ~ createUser ~ error:', error)
    }
}
module.exports = {
    createUser,
    getAllUser,
}