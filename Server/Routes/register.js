const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const fs = require("fs");

router.post("/", async (req, res) => {
  const { fullName, username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  res.send(hashedPassword);
  fs.readFile("./data/PROFILES.json", "utf8", (err, data) => {
    const id = JSON.parse(data).length + 1;
    if (err) {
      console.error(err);
      return;
    }
    const profiles = JSON.parse(data);
    profiles.push({
      id,
      fullName,
      username,
      email,
      password: hashedPassword,
    });
    fs.writeFile("./data/PROFILES.json", JSON.stringify(profiles), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Profile has been added");
    });
  });
});

module.exports = router;
