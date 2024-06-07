const express = require("express");

const router = express.Router();

const posts = require("../data/MOCK_DATA_POSTS.json");

router.get("/", (req, res) => {
  try {
    const dateSorted = posts.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    // console.log(dateSorted);
    return res.status(200).send(dateSorted);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
