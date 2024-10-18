const userModel = require("../users/model")

const registerAdmin = async (req, res) => {
    try {
        let { firstname, lastname, login, password, age, from, } = req.body
        let users = await userModel.create({ firstname, lastname, login, password, age, from, role: "admin" })
        res.send({
            succes: true,
            message: "Created admin !!!",
            data: users
        })
    } catch (error) {
        res.status(error.status || 400).send({
            succes: false,
            message: error.message
        })
    }
}

const registerUser = async (req, res) => {
    try {
        let { firstname, lastname, login, password, age, from, } = req.body
        let users = await userModel.create({ firstname, lastname, login, password, age, from, role: "user" })
        res.send({
            succes: true,
            message: "Created user !!!",
            data: users
        })
    } catch (error) {
        res.status(error.status || 400).send({
            succes: false,
            message: error.message
        })
    }
}

module.exports = {
    registerAdmin,
    registerUser
}