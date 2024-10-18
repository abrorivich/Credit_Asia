const { Router } = require("express")
const commoditiesRouter = require("../modules/commodity/route")
const verifyToken = require("../middlewares/verifytoken")
const commoditiesRoute = Router()

commoditiesRoute.use("/commodities", verifyToken() , commoditiesRouter)

module.exports = commoditiesRoute