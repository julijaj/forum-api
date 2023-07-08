const express = require("express");
const router = express.Router();

const {
  GET_ANSWERS,
  POST_ANSWER,
  DELETE_ANSWER,
} = require("../controllers/answer");

router.get("/questions/:question_id/answers", GET_ANSWERS);
router.post("/questions/:question_id/answers", POST_ANSWER);
router.delete("/questions/:question_id/answers/:id", DELETE_ANSWER);

module.exports = router;
