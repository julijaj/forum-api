const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true, min: 3 },
  password: { type: String, required: true, min: 3 },
});

module.exports = mongoose.model("User", userSchema);
