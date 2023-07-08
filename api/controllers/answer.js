const Answer = require("../models/answerModel");


module.exports.GET_ANSWERS = async function (req, res) {
  try {
    const result = await Answer.find({question_id: req.params.question_id}).sort("id").exec();
    return res.status(200).json({ answers: result });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};

module.exports.POST_ANSWER = async function (req, res) {
  try {
    console.log(req.body);

    const answer = new Answer({
      question_id: req.params.question_id,
      content: req.body.content,
    });
    const result = await answer.save();

    return res.status(200).json({
      event: result,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};

module.exports.DELETE_ANSWER = async function (req, res) {
  try {
    await Answer.deleteOne({ _id: req.params.id }).exec();

    return res.status(200).json({ statusMessage: "Deleted successfully" });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};
