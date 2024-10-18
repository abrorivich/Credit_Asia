const userModel = require("./model")

const getAllUsers = async (req, res) => {
    try {
        let users = await userModel.find()
        if (users) {
            res.send({
                succes: true,
                data: users
            })
        } else {
            res.send({
                succes: true,
                data: []
            })
        }
    } catch (error) {
        res.status(error.status || 400).send({
            succes: false,
            message: error.message
        })
    }
}

const updateUsers = async (req, res) => {
    try {
        const { _id } = req.params
        const { firstname, lastname, login, password, age, from } = req.body
        let users = await userModel.findById(_id)
        if (users) {
            await userModel.findByIdAndUpdate(_id, { firstname, lastname, login, password, age, from })
            res.status(200).send({
                succes: true,
                message: "Updated"
            })
        } else {
            res.status(404).send({
                success: false,
                message: `Cannot found user with id ${_id}`
            })
        }
    } catch (error) {
        res.status(error.status || 400).send({
            succes: false,
            message: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const {_id} = req.params
        let users = await userModel.findById(_id)
        if (users) {
            await userModel.findByIdAndDelete(_id)
            res.send({
                succes: true,
                message: "Deleted !"
            })
        } else {
            res.status(404).send({
                success: false,
                message: `Cannot found user with id ${_id}`
            })
        }
    } catch (error) {
        res.status(error.status || 400).send({
            succes: false,
            message: error.message
        })
    }
}

module.exports = {
    getAllUsers,
    updateUsers,
    deleteUser
}