const Question = require("../models/questionModel");

module.exports.POST_QUESTION = async function (req, res) {
  try {
    console.log(req.body);

    const userId = req.headers['user-id'];

    const question = new Question({
      content: req.body.content,
      user_id: userId,
    });

    const result = await question.save();

    return res.status(200).json({
      question: result,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};

module.exports.GET_QUESTIONS = async function (req, res) {
  try {
    const userId = req.headers['user-id'];

    const result = await Question.find().sort("id").exec();
    const modifiedResult = result.map((question) => {
      return {
        ...question.toObject(),
        canDelete: question.user_id === userId,
      };
    });
    return res.status(200).json({ questions: modifiedResult });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};

module.exports.GET_QUESTION = async function (req, res) {
  try {
    const result = await Question.findOne({ _id: req.params.id }).exec();

    return res.status(200).json({ question: result });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};

module.exports.DELETE_QUESTION = async function (req, res) {
  try {
    await Question.deleteOne({ _id: req.params.id }).exec();

    return res.status(200).json({ statusMessage: "Deleted successfully" });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};
