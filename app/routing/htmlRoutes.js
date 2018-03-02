// Dependencies
var express = require("express");
var path = require("path");

// Exports the function
module.exports = function(app) {
    // Routes
    app.get("/", function(req, res) {
     res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}