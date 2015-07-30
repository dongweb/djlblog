var express = require('express');
var router = express.Router();

router.post('/add', function(req, res, next) {
  res.send('add article');
});

module.exports = router;
