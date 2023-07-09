const User = require("../models/userModel");

module.exports.REGISTER = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      username: req.body.username,
    }).exec();
    if (existingUser) {
      return res.status(400).json({ response: "User already exists" });
    }

    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    const result = await user.save();

    return res
      .status(200)
      .json({ response: "User was created successfully", user: result });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};

module.exports.LOGIN = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      username: req.body.username,
    }).exec();

    if (!existingUser) {
      return res.status(400).json({ response: "User not found" });
    } else if (existingUser.password != req.body.password) {
      return res.status(400).json({ response: "Password incorrect" });
    }

    return res
      .status(200)
      .json({ response: "Login was succesful", user: existingUser });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};
