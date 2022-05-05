const express = require("express");
const app = express();
const latestStories = require("./component/latestStories");
const featuredVoices = require("./component/featuredVoices");
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("time", { featuredVoices, latestStories }); //for render the page with properties
});
app.get("/getTimeStories", (req, res) => res.send(latestStories));
console.log("http://localhost:8080/");
app.listen(8080);
