const mongoose = require("mongoose")

const testSchema = mongoose.Schema({
    ordernum:{type:String},
    customer:{type:String},
    product:{type:String},
    item:{type:Number},
    date:{type:Date},
    status:{type:String}
} )

const order = mongoose.model("order",testSchema)

module.exports = order
