const categoryModel = require("./model")

const createCategories = async (req, res) => {
    try {
        let { name } = req.body
        let categories = await categoryModel.create({ name })
        res.status(200).send({
            succes: true,
            message: "category created",
            data: categories
        })
    } catch (error) {
        res.status(error.status || 400).send({
            succes: false,
            message: error.message
        })
    }
}

const getAllCategories = async (req, res) => {
    try {
        let categories = await categoryModel.find()
        res.status(200).send({
            succes: true,
            data: categories
        })
    } catch (error) {
        res.status(error.status || 400).send({
            succes: false,
            message: error.message
        })
    }
}

const updateCategories = async (req, res) => {
    try {
        let { _id } = req.params
        const { name } = req.body
        let categories = categoryModel.findById({ _id })
        if (categories) {
            await categoryModel.findByIdAndUpdate(_id, { name })
            res.status(200).send({
                succes: true,
                message: "Updated"
            })
        } else {
            res.status(404).send({
                succes: false,
                message: error.message
            })
        }
    } catch (error) {
        res.status(error.status || 400).send({
            succes: false,
            message: error.message
        })
    }
}

const deleteCategories = async (req, res) => {
    try {
        let { _id } = req.params
        let categories = categoryModel.findById(_id)
        if (categories) {
            await categoryModel.findByIdAndDelete(_id)
            res.status(200).send({
                succes: true,
                message: "Deleted"
            })
        } else {
            res.status(404).send({
                succes: false,
                message: error.message
            })
        }
    } catch (error) {
        res.status(400).send({
            succes: false,
            message: error.message
        })
    }
}

module.exports = {
    createCategories,
    getAllCategories,
    updateCategories,
    deleteCategories
}