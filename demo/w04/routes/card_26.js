var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('card_26/index', { id: '210410626', name: 'Huang Wei Yi' });
});

module.exports = router;