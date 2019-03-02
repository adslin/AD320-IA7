var express = require('express');
var router = express.Router();
var data = require('../colors.json');

router.get('/all', function(req, res, next) {
  res.send(data.colors);
});

module.exports = router;