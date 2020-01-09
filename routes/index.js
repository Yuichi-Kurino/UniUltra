var express = require('express');
var router = express.Router();
var title = "UniUltraTech";
/* GET home page. */

router.get('/', function(req, res, next) {
    var query = require('url').parse(req.url, true).query;
    var buffer ="";
    res.render('index', { title:title, data:buffer});

});

router.get('/ios_android_app', function(req, res, next) {
    var query = require('url').parse(req.url, true).query;
    var buffer ="";
    res.render('ios_android_app', { title:title, data:buffer});

});

module.exports = router;
