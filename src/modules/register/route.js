const {Router} = require("express")
const { registerAdmin, registerUser } = require("./register")
const { login } = require("./login")

const registerRouter = Router()

registerRouter.post("/registerAdmin", registerAdmin)
registerRouter.post("/registerUser", registerUser)
registerRouter.post("/login", login)

module.exports = registerRouter
