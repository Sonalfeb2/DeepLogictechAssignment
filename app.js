const express = require("express");
const app = express();
const latestStories = require("./component/latestStories"); //Include Js file which contain the json data of the latest stories
const featuredVoices = require("./component/featuredVoices"); //Include Js file which contain the json data of the featuredVoices
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("time", { featuredVoices, latestStories }); //for render the page with properties
});
app.get("/getTimeStories", (req, res) => res.send(latestStories));
console.log("http://localhost:8080/");
app.listen(8080);
