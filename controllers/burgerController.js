var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    console.log(data);
    res.render("index", {burgers: data});
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create("burgers", ["name", "devour"], [req.body.name, req.body.devour], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  console.log("my id server " + req.params.id);
  burger.update("burgers", "devour", 1, "id", req.params.id, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
