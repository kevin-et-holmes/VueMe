const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log("Register route :", req.body);
  //   const username = req.body.username;
  //   const email = req.body.email;
  //   const password = req.body.password;
  //   console.log("Username: ", username);
  //   console.log("Email: ", email);
  //   console.log("Password: ", password);
});

module.exports = router;
