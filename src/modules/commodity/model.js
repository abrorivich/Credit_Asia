const { Schema, model, Types } = require("mongoose")

const commodityModel = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },

    price: {
       type: String,
       required: true
    },
    
    video_card: {
        type: Boolean,
        required: true
    },

    amount: {
        type: String,
        required: true
    },

    categories: [
        {
            type: Types.ObjectId,
            ref: "Categories"
        }
    ]

},{
    collection: "commodities"
})

module.exports = model("Commodities", commodityModel)