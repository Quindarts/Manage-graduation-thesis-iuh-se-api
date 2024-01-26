const db = require('../../schema/models')

const createMajor = async (req, res) => {
    try {
        const newMajor = await db.major.create({
            name: 'Công nghệ thông tin',
        })
        console.log('🚀 ~ createMajor ~ newMajor:', newMajor)
        res.json(newMajor)
    } catch (error) {
        console.log('🚀 ~ createMajor ~ error:', error)
    }
}
module.exports = {
    createMajor,
}
