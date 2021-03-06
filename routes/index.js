var express = require('express');
var router = express.Router();

const Endpoint = require('../models/Endpoint');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/foo', function(req, res, next) {
    var endpoint = new Endpoint({
        name: "Google",
        baseUrl: "https://google.com",
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
