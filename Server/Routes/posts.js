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

router.get("/:username", (req, res) => {
  try {
    const post = posts.filter((post) => post.username == req.params.username);
    console.log(req.params.id);
    console.log(post);
    if (!post) {
      return res.status(404).send("Post not found");
    }
    return res.status(200).send(post);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
