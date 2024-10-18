const { Schema, model, Types } = require("mongoose")

const categoriesModel = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    commodities: [
        {
            type: Types.ObjectId,
            ref: "Commodities"
        }
    ]
}, {
    collection: "categories"
})

module.exports = model("Categories", categoriesModel)