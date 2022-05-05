const express = require("express");
const app = express();
const latestStories = require("./component/latestStories");
const featuredVoices = require("./component/featuredVoices");
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("time", { featuredVoices, latestStories });
});
app.listen(8080);
