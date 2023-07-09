const express = require("express");
const router = express.Router();

const {
  REGISTER,
  LOGIN,
} = require("../controllers/user");

router.post("/users/register", REGISTER);
router.post("/users/login", LOGIN);

module.exports = router;
