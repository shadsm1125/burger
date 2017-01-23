var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function (req, res) {
    res.redirect("/burger");
});

router.get("/burgers", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function (req, res) {
    burger.create([
        "name", "sleepy"
    ], [
            req.body.name, req.body.sleepy
        ], function () {
            res.redirect("/burgers");
        });
});

router.put("/burgers/update/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        sleepy: req.body.sleepy
    }, condition, function () {
        res.redirect("/burgers");
    });
});


// Export routes for server.js to use.
module.exports = router;
