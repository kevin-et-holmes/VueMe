const express = require("express");

const router = express.Router();

const posts = require("../data/MOCK_DATA_POSTS.json");

router.get("/", (req, res) => {
  try {
    //console.log(posts);
    return res.status(200).send(posts);
  } catch (error) {
    return res.status(500).send(error.message);
    s;
  }
});

module.exports = router;
