// const QuestionSchema = require("../models/questionModel");

module.exports.GET_QUESTIONS = async function (req, res) {
  try {
    return res.status(200).json("Hello world!")
    // const result = await QuestionSchema.find().sort("id").exec();
    // return res.status(200).json({ question: result });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};
