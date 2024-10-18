const { Router } = require("express")
const verifyRole = require("../../middlewares/verifyRole")
const { createCategories, getAllCategories, updateCategories, deleteCategories } = require("./categories")

const categoriesRouter = Router()

categoriesRouter.post("/create", verifyRole("admin"), createCategories)
categoriesRouter.get("/getAll", verifyRole("admin"), getAllCategories)
categoriesRouter.patch("/update/:_id", verifyRole("admin"), updateCategories)
categoriesRouter.delete("/delete/:_id", verifyRole("admin"), deleteCategories)

module.exports = categoriesRouter