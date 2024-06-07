const express = require("express");

const router = express.Router();

const profile = require("../data/MOCK_DATA_PROFILES.json");

// Define your route handlers here
router.get("/:id", async (req, res) => {
  const username = req.params.id;
  const user = profile.find((user) => user.username === username);
  console.log("DB file: ", user);
  console.log("URL Parameter: ", username);
  if (user) {
    return res.status(200).send(user);
  } else {
    return res.status(404).send("User not found");
  }
});

// Export the router
module.exports = router;
