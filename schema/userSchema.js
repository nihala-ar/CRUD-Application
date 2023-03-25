const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{type:String},
    author:{type:String},
    // date:{type:String},
    // summary:{type:String},
    // category:{type:String},
    // language:{type:String},
    // pages:{type:String},
    // isbn:{type:String}
})

const book = mongoose.model("Books", userSchema)

module.exports = book