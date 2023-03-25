const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  name: { type: String },
  address: { type: String },
  number: { type: String },
  descptn: { type: String },
  number2: { type: String },
  position: { type: String },
});

const member = mongoose.model("member", testSchema);

module.exports = member;
