var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

var express = require("express");
var app = express();

app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.search("view engine", "handlebars");

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("Listening on port" + PORT);
});
