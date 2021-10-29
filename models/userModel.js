const mongoose = require("../connection");

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  avatar : String,
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("users", schema);

module.exports = model;
