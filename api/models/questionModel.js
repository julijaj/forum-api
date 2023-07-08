const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  content: { type: String, required: true, min: 3 },
});

module.exports = mongoose.model("Question", questionSchema);
