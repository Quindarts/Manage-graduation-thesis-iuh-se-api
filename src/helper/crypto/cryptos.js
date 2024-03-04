const CryptoJS = require('crypto-js')
//AES
function encryptedPassword(password) {
    return CryptoJS.AES.encrypt(
        password,
        process.env.PASSWORD_SECRET_KEY
    ).toString()
}

function decryptedPassword(decryptPassword) {
    return CryptoJS.AES.decrypt(
        decryptPassword,
        process.env.PASSWORD_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8)
}

module.exports = {
    encryptedPassword,
    decryptedPassword,
}
