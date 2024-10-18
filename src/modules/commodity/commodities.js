const ItemModel = require("./model")
const categoriesModel = require("../categories/model")

const createItem = async (req, res) => {
    try {        
        let { name, price, video_card, amount, category_ids } = req.body
        let commodities = await ItemModel.create({ name, price, video_card, amount, categories: category_ids, })
        await categoriesModel.updateMany({_id: {$in: category_ids}}, {$push: {commodities: commodities._id}})
        res.status(200).send({
            succes: true,
            message: ` ${name} created`
        })
    } catch (error) {
        res.status(error.status || 400).send({
            succes: false,
            message: error.message
        })
    }
}

const gettAllItem = async (req, res) => {
    try {
        let notebook = await ItemModel.find()
        res.status(200).send({
            succes: true,
            data: notebook
        })
    } catch (error) {
        res.status(error.status).send({
            succes: false,
            message: error.message
        })
    }
}

const updateItem = async (req, res) => {
    try {
        let { _id } = req.params
        const { name, price, video_card, amount } = req.body
        let notebook = ItemModel.findById({ _id })
        if (notebook) {
            await ItemModel.findByIdAndUpdate(_id, { name, price, video_card, amount })
            res.status(200).send({
                succes: true,
                message: "updated"
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

const deleteItem = async ( req, res ) => {
    try {
        let { _id } = req.params
        let notebook = ItemModel.findById(_id)
        if (notebook) {
            await ItemModel.findByIdAndDelete(_id)
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
    createItem,
    gettAllItem,
    updateItem,
    deleteItem
}