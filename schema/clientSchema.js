const mongoose = require("mongoose")

const testSchema = mongoose.Schema({
    username:{type:String},
    role:{type:String},
    email:{type:String},
    status:{type:String},
    info:{type:String}
} )

const client = mongoose.model("client",testSchema)

module.exports = client
