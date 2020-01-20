var express = require('express');
var router = express.Router();
var title = "UniUltraTech";
/* GET home page. */

router.get('/index', function(req, res, next) {
    var query = require('url').parse(req.url, true).query;
    var buffer ="";
    res.render('index', { title:title, data:buffer});

});

router.get('/ios_android_app', function(req, res, next) {
    var query = require('url').parse(req.url, true).query;
    var buffer ="";
    res.render('ios_android_app', { title:title, data:buffer});

});

router.post("/contactUsForm",function(req, res, next){
    var name = req.body.name;
    var email = req.body.email;
    var concern = req.body.concern;

    console.log(concern);
});

module.exports = router;
