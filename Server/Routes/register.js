const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;

// const profile = require("../data/PROFILES.json");

const user = {
  fullName: "",
  username: "",
  email: "",
  password: "",
};

router.post("/", async (req, res) => {
  const { fullName, username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  res.send(hashedPassword);
});

module.exports = router;
