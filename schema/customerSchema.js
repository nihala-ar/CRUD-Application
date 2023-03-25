const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  name: { type: String },
  address: { type: String },
  product: { type: String },
  village: { type: String },
  district: { type: String },
  state: { type: String },
  nationality: { type: String }
});

const customer = mongoose.model("customer", testSchema);

module.exports = customer;
