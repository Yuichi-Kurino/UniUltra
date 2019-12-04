var express = require('express');
var router = express.Router();
var title = "UniUltraTech";
/* GET home page. */

router.get('/display', function(req, res, next) {
  var query = require('url').parse(req.url, true).query;

  var uniUltraLogo = "/images/Uniultra log.png";

  var id = query.dd;
  var name = "Thomas";
  var buffer ="";
  res.render('index', { title:title, data:buffer,name, id, uniUltraLogo});
});

module.exports = router;
