const {Schema, model, Types} = require("mongoose")

const userSchema = new Schema ({
    firstname: {
        type: String,
        required: true,
        unique: true
    },

    lastname: {
        type: String,
        required: true,
    },

    login: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true,
    },

    from: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        required: true
    }
},{
    collection: "user"
})

module.exports = model("User", userSchema)