const userModel = require("../users/model")
const { sign } = require("../../utils/jwt")

const login = async (req, res) => {
    try {
        let { login, password } = req.body
        let users = await userModel.findOne({ login, password })
        if (users) {
            let token = sign({ _id: users._id })
            res.send({
                success: true,
                token,
                role: users.role,
            })
        }
    } catch (error) {
        res.status(error.status || 400).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    login
}