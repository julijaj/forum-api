const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  question_text: { type: String, required: true, min: 3 },
  answers_id: { type: Array, required: true },
});

module.exports = mongoose.model("Question", questionSchema);
