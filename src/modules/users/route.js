const {Router} = require("express")
const { getAllUsers, updateUsers, deleteUser } = require("./users")

const userRouter = Router()

userRouter.get("/getAll", getAllUsers)
userRouter.patch("/update/:_id", updateUsers)
userRouter.delete("/delete/:_id", deleteUser)

module.exports = userRouter
