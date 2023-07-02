const express = require("express");
const router = express.Router();

const {
  POST_QUESTION,
  GET_QUESTIONS,
  GET_QUESTION,
  DELETE_QUESTION,
} = require("../controllers/question");

router.post("/questions", POST_QUESTION);
router.get("/questions", GET_QUESTIONS);
router.get("/questions/:id", GET_QUESTION);
router.delete("/questions/:id", DELETE_QUESTION);

module.exports = router;
