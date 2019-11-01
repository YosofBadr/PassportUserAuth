// Test application for Passport.js user authentication - following Colt Steele

var express = require('express');

var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.send("Hello");
});

app.listen(3000, function() {
  console.log("App listening on port 3000");
});