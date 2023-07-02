const QuestionSchema = require("../models/questionModel");

module.exports.POST_QUESTION = async function (req, res) {
  try {
    console.log(req.body);

    const question = new QuestionSchema({
      question_text: req.body.question_text,
    });

    const result = await question.save();

    return res.status(200).json({
      event: result,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};

module.exports.GET_QUESTIONS = async function (req, res) {
  try {
    const result = await QuestionSchema.find().sort("id").exec();
    return res.status(200).json({ questions: result });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};

module.exports.GET_QUESTION = async function (req, res) {
  try {
    const result = await QuestionSchema.findOne({ _id: req.params.id }).exec();

    return res.status(200).json({ question: result });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};

module.exports.DELETE_QUESTION = async function (req, res) {
  try {
    await QuestionSchema.deleteOne({ _id: req.params.id }).exec();

    return res.status(200).json({ statusMessage: "Deleted successfully" });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};
