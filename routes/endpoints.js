var express = require('express');
var router = express.Router();

const Endpoint = require('../models/Endpoint');

router.get('/', function(req, res, next) {
    Endpoint.find({}, function(err, data) {
        res.json(data);
    });
});

router.post('/', function(req, res, next) {
    var endpoint = new Endpoint({
        title: "Google",
        url: "https://google.com",
        active: true
    });

    endpoint.save(function(err) {
        if (err) {
            return res.json("Unable to save");
            console.log(err);
        }
        res.json('saved');
    })
});

module.exports = router;
