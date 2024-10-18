const { connect } = require("mongoose")

async function connectTOMongoDB() {
    try {
        await connect("mongodb://localhost:27017/credit_asia")
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectTOMongoDB