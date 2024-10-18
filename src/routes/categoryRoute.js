const {Router} = require("express")
const categoryRoute = Router()
const categoriesRouter = require("../modules/categories/route")
const verifyToken = require("../middlewares/verifytoken")

categoryRoute.use("/categories", verifyToken(), categoriesRouter)

module.exports = categoryRoute

