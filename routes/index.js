var express = require('express');
var router = express.Router();
var title = "UniUltraTech";
/* GET home page. */

router.get('/', function(req, res, next) {
  var query = require('url').parse(req.url, true).query;

  var uniUltraLogo = "/images/imageedit_2_2824098619.png";
  var meetingVideo = "/images/Meeting - 2340.mp4";
  var contactUs = "/images/contact Us.png";
  var freeConsultant = "/images/free consultant.png";
  var startOnProject = "/images/Start on project.png";
  var buffer ="";
  res.render('index', { title:title, data:buffer, uniUltraLogo, meetingVideo, contactUs, freeConsultant, startOnProject});

});


module.exports = router;
