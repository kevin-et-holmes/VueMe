const express = require("express");

const router = express.Router();

const profile = require("../data/MOCK_DATA_PROFILES.json");

// Define your route handlers here
router.get("/:username", (req, res) => {
  console.log(req.params.username);
  res.send("Hello, profile!");
});

// Export the router
module.exports = router;
