const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
  question_id: {type: String, required: true, min: 3},
  content: { type: String, required: true, min: 3 },
  gained_likes_number: { type: Number, required: false },
  user_id: { type: String, required: true },
});

module.exports = mongoose.model("Answer", answerSchema);
