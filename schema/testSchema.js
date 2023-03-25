const mongoose = require("mongoose")

const testSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
} )

const user = mongoose.model("user",testSchema)

module.exports = user
