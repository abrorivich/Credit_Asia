const userRouter = require("../modules/users/route")
const { Router } = require("express")
const userRoute = Router()

userRoute.use("/users", userRouter)

module.exports = userRoute