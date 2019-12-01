var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('', function(req, res, next) {
  var name = "Thomas";
  var buffer ="";
  res.render('index', { title: 'Express', data:buffer,name });
});
router.get('/display', function(req, res, next) {
  var query = require('url').parse(req.url, true).query;
  var id = query.dd;
  var name = "Thomas";
  var buffer ="";
  res.render('index', { title: 'Express', data:buffer,name, id });
});
module.exports = router;
