var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/ios_android_app.ejs', function(req, res, next) {
  res.send('/ios_android_app.ejsgit ');
});
module.exports = router;
