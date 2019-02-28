const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/route1', function(req,res){
  res.sendFile(path.join(__dirname+'/route1.html'));
});

module.exports = router;