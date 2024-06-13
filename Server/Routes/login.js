const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const db = require("../data/PROFILES.json");

// Define your login route
router.post("/", (req, res) => {
  const { username, password } = req.body;
  const user = db.find((user) => user.username === username);
  console.log("User: ", user);
  if (user) {
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        return res.status(200).send(user);
      } else {
        return res.status(401).send("Invalid password");
      }
    });
  } else {
    return res.status(404).send("User not found");
  }
});

module.exports = router;
