const express = require("express");
const router = express.Router();
const fs = require("fs");

const mockProfile = require("../data/MOCK_DATA_PROFILES.json");

// Define your route handlers here
router.get("/:id", async (req, res) => {
  const username = req.params.id;
  const user = mockProfile.find((user) => user.username === username);
  // console.log("DB file: ", user);
  // console.log("URL Parameter: ", username);
  if (user) {
    return res.status(200).send(user);
  } else {
    return res.status(404).send("User not found");
  }
});

router.post("/refresh", (req, res) => {
  // console.log("Refreshed");
  fs.readFile("./data/PROFILES.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const profiles = JSON.parse(data);
    // console.log("All Profiles: ", profiles);
    fs.writeFileSync(
      "./data/PROFILES.json",
      JSON.stringify(profiles.splice(0, 1))
    );
  });
});

module.exports = router;
