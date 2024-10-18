const { Router } = require("express")
const registerRouter = require("../modules/register/route")
const registerRoute = Router()

registerRoute.use("/register", registerRouter)

module.exports = registerRoute