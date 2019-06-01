var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/mypage', function(req, res, next) {
  res.send('mypage');
});

router.get('/mypage/admin', function(req, res, next) {
  res.send('mypage');
});

module.exports = router;
