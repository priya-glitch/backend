const mongoose = require("mongoose");
const uri = require("./config").api_url;

mongoose
  .connect(uri)
  .then(() => {
    console.log("database connected..");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;
