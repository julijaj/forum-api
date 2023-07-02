const express = require("express");
const router = express.Router();

const {
    GET_QUESTIONS,
  } = require("../controllers/question");

router.get("/questions", GET_QUESTIONS);

module.exports = router;
