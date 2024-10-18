const { Router } = require("express")
const { gettAllItem, updateItem, deleteItem, createItem } = require("./commodities")
const verifyRole = require("../../middlewares/verifyRole")

const commoditiesRouter = Router()

commoditiesRouter.post("/create", verifyRole("admin"), createItem)
commoditiesRouter.get("/getAll", verifyRole("admin"), gettAllItem)
commoditiesRouter.patch("/update/:_id", verifyRole("admin"), updateItem)
commoditiesRouter.delete("/delete/:_id", verifyRole("admin"), deleteItem)

module.exports = commoditiesRouter