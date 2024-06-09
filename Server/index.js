const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());

const db = require("./data/MOCK_DATA_POSTS.json");
// Define your routes here

const homeRoute = require("./Routes/home");
const profileRoute = require("./Routes/profile");
const registerRoute = require("./Routes/register");

app.use("/posts", homeRoute);
app.use("/profile", profileRoute);
app.use("/register", registerRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
